import requests
from bs4 import BeautifulSoup

class WebScanner:

    def __init__(self, url):
        self.url = url
        self.vulnerabilities = []

        # Severity weights (AI-like scoring)
        self.severity_weights = {
            "SQL Injection": 10,
            "XSS": 8,
            "Hardcoded Password": 9,
            "Insecure Endpoint": 6
        }

    def scan(self):
        try:
            response = requests.get(self.url)
            soup = BeautifulSoup(response.text, "html.parser")
            page_content = response.text

            self.detect_sql_injection(page_content)
            self.detect_xss(page_content)
            self.detect_hardcoded_password(page_content)

            self.remove_duplicates()

            return self.vulnerabilities

        except Exception as e:
            print("Scan Error:", e)
            return []

    # -------------------------
    # Detection Methods
    # -------------------------

    def detect_sql_injection(self, content):
        if "SELECT" in content.upper() or "DROP TABLE" in content.upper():
            self.add_vulnerability("SQL Injection", "Potential SQL query exposed")

    def detect_xss(self, content):
        if "<script>" in content.lower():
            self.add_vulnerability("XSS", "Script tag detected in page")

    def detect_hardcoded_password(self, content):
        if "password=" in content.lower():
            self.add_vulnerability("Hardcoded Password", "Password found in source")

    # -------------------------
    # Helper Methods
    # -------------------------

    def add_vulnerability(self, vuln_type, description):
        weight = self.severity_weights.get(vuln_type, 5)

        vulnerability = {
            "title": vuln_type,
            "description": description,
            "risk_score": weight,
            "confidence": f"{min(weight * 10, 95)}%",
            "severity": self.calculate_severity(weight)
        }

        self.vulnerabilities.append(vulnerability)

    def calculate_severity(self, score):
        if score >= 9:
            return "Critical"
        elif score >= 7:
            return "Warning"
        else:
            return "Info"

    def remove_duplicates(self):
        unique = []
        seen = set()

        for vuln in self.vulnerabilities:
            key = vuln["title"] + vuln["description"]
            if key not in seen:
                seen.add(key)
                unique.append(vuln)

        self.vulnerabilities = unique
