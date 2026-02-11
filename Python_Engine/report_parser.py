import json

class ReportParser:

    def generate_report(self, vulnerabilities):

        total_score = sum(v["risk_score"] for v in vulnerabilities)

        summary = {
            "total_issues": len(vulnerabilities),
            "critical": len([v for v in vulnerabilities if v["severity"] == "Critical"]),
            "warning": len([v for v in vulnerabilities if v["severity"] == "Warning"]),
            "info": len([v for v in vulnerabilities if v["severity"] == "Info"]),
            "total_risk_score": total_score,
            "overall_risk_level": self.calculate_overall_risk(total_score)
        }

        report = {
            "summary": summary,
            "issues": vulnerabilities
        }

        with open("latest_report.json", "w") as f:
            json.dump(report, f, indent=4)

        return report

    def calculate_overall_risk(self, score):
        if score >= 20:
            return "High Risk"
        elif score >= 10:
            return "Medium Risk"
        else:
            return "Low Risk"
