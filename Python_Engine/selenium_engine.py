from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import os
import time

class SeleniumEngine:
    def __init__(self):
        # Browser ki settings configure karna
        self.chrome_options = Options()
        self.chrome_options.add_argument("--headless")  # Browser window dikhegi nahi (Background mein chalega)
        self.chrome_options.add_argument("--no-sandbox")
        self.chrome_options.add_argument("--disable-dev-shm-usage")
        self.driver = None

    def start_browser(self):
        """Browser ko chalu karne ke liye function"""
        try:
            # ChromeDriver ko automatic download aur setup karna
            service = Service(ChromeDriverManager().install())
            self.driver = webdriver.Chrome(service=service, options=self.chrome_options)
            print("Browser Engine Started Successfully!")
        except Exception as e:
            print(f"Error starting browser: {str(e)}")

    def take_screenshot(self, url, filename):
        """Kisi bhi website ka screenshot lene ke liye"""
        if not self.driver:
            self.start_browser()
            
        try:
            self.driver.get(url)
            time.sleep(2)  # Page load hone ka intezar
            
            # Screenshots folder check karna
            if not os.path.exists('frontend/public/screenshots'):
                os.makedirs('frontend/public/screenshots')
            
            path = f"frontend/public/screenshots/{filename}.png"
            self.driver.save_screenshot(path)
            print(f"Screenshot saved at: {path}")
            return path
        except Exception as e:
            print(f"Screenshot error: {str(e)}")
            return None

    def close_browser(self):
        """Browser band karna"""
        if self.driver:
            self.driver.quit()
            print("Browser Engine Closed.")

# Testing ke liye (Jab aap direct file run karein)
if __name__ == "__main__":
    engine = SeleniumEngine()
    engine.start_browser()
    # Example: Google ka screenshot lekar check karte hain
    engine.take_screenshot("https://www.google.com", "test_screenshot")
    engine.close_browser()