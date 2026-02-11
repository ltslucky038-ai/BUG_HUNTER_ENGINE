import sys
from web_scanner import WebScanner
from report_parser import ReportParser

def main():

    if len(sys.argv) < 2:
        print("Usage: python main.py <target_url>")
        return

    url = sys.argv[1]

    print("Starting Scan on:", url)

    scanner = WebScanner(url)
    vulnerabilities = scanner.scan()

    parser = ReportParser()
    report = parser.generate_report(vulnerabilities)

    print("Scan Completed!")
    print("Total Issues Found:", report["summary"]["total_issues"])
    print("Overall Risk Level:", report["summary"]["overall_risk_level"])

if __name__ == "__main__":
    main()
