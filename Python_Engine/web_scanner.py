import time
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

class WebScanner:
    def __init__(self):
        # --- WEB DRIVER PART ---
        print("Driver setup ho raha hai...")
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Background mein chalega
        chrome_options.add_argument("--no-sandbox")
        
        service = Service(ChromeDriverManager().install())
        self.driver = webdriver.Chrome(service=service, options=chrome_options)
        self.found_bugs = []

    def scan_page(self, url):
        # --- WEB SCANNER PART ---
        print(f"Scanning shuru ho rahi hai: {url}")
        try:
            self.driver.get(url)
            time.sleep(3) # Page load hone ka wait

            # 1. Broken Links Check Karna
            links = self.driver.find_elements(By.TAG_NAME, "a")
            for link in links:
                href = link.get_attribute("href")
                if not href or "javascript" in href:
                    self.found_bugs.append({"type": "Broken Link", "detail": f"Empty href found at {url}"})

            # 2. Form Input Issues Check Karna
            inputs = self.driver.find_elements(By.TAG_NAME, "input")
            for i in inputs:
                if not i.get_attribute("id") and not i.get_attribute("name"):
                    self.found_bugs.append({"type": "UI Bug", "detail": "Input field missing ID or Name attribute"})

            # 3. Image Alt Text Check Karna (SEO/Accessibility bug)
            images = self.driver.find_elements(By.TAG_NAME, "img")
            for img in images:
                if not img.get_attribute("alt"):
                    self.found_bugs.append({"type": "Accessibility", "detail": f"Image missing Alt text: {img.get_attribute('src')}"})

            print(f"Scan complete! {len(self.found_bugs)} bugs mile hain.")
            return self.found_bugs

        except Exception as e:
            print(f"Scanning error: {e}")
            return []

    def save_report(self):
        """Milne waale bugs ko JSON file mein save karna"""
        # Hum is report ko 'frontend/public/data' mein save karenge
        report_path = "frontend/public/data/scan_report.json"
        
        # Folder check
        import os
        os.makedirs(os.path.dirname(report_path), exist_ok=True)
        
        with open(report_path, "w") as f:
            json.dump(self.found_bugs, f, indent=4)
        print(f"Report save ho gayi: {report_path}")

    def close(self):
        self.driver.quit()

if __name__ == "__main__":
    scanner = WebScanner()
    # Test ke liye localhost ya kisi site ko scan karein
    scanner.scan_page("http://localhost:3000") 
    scanner.save_report()
    scanner.close()