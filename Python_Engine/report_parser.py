import json
import os

class ReportParser:
    def __init__(self, raw_data_path="raw_results.json", final_report_path="frontend/public/data/final_report.json"):
        self.raw_data_path = raw_data_path
        self.final_report_path = final_report_path

    def parse_results(self):
        """
        Raw scanning data ko read karke use clean dashboard format mein badalna.
        """
        print("Parsing results for the target application...")
        
        if not os.path.exists(self.raw_data_path):
            print(f"Error: {self.raw_data_path} nahi mili!")
            return False

        try:
            with open(self.raw_data_path, 'r') as file:
                raw_data = json.load(file)

            # Dashboard ke liye structured data
            parsed_data = {
                "summary": {
                    "total_issues": len(raw_data),
                    "critical": 0,
                    "warning": 0,
                    "info": 0
                },
                "issues": []
            }

            for item in raw_data:
                # Severity count update karna
                severity = item.get("severity", "info").lower()
                if severity in parsed_data["summary"]:
                    parsed_data["summary"][severity] += 1
                else:
                    parsed_data["summary"]["info"] += 1

                # Clean issue object banana
                issue = {
                    "title": item.get("issue_name", "Unknown Bug"),
                    "impact": item.get("impact", "High"),
                    "location": item.get("url_or_path", "N/A"),
                    "description": item.get("description", "No details provided"),
                    "screenshot": item.get("screenshot_path", ""),
                    "fix_suggestion": item.get("fix", "Review manual logs")
                }
                parsed_data["issues"].append(issue)

            # Final JSON save karna jo React Dashboard use karega
            os.makedirs(os.path.dirname(self.final_report_path), exist_ok=True)
            with open(self.final_report_path, 'w') as out_file:
                json.dump(parsed_data, out_file, indent=4)

            print(f"Parsing Complete! Final report ready at: {self.final_report_path}")
            return True

        except Exception as e:
            print(f"Parsing error: {e}")
            return False

if __name__ == "__main__":
    # Test execution
    parser = ReportParser()
    parser.parse_results()