import os
import time
from datetime import datetime

class ScreenshotManager:
    def __init__(self, base_folder="frontend/public/screenshots"):
        # Screenshots save karne ke liye folder path setup
        self.base_folder = base_folder
        if not os.path.exists(self.base_folder):
            os.makedirs(self.base_folder)
            print(f"Directory created: {self.base_folder}")

    def capture_bug(self, driver, bug_type):
        """
        Jab koi bug milega, tab ye function us specific moment ka screenshot lega.
        """
        # Unique file name banana (BugType + Timestamp)
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        file_name = f"{bug_type.replace(' ', '_')}_{timestamp}.png"
        file_path = os.path.join(self.base_folder, file_name)

        try:
            # Thoda wait taaki page stable ho jaye
            time.sleep(1) 
            driver.save_screenshot(file_path)
            print(f"Bug Captured: {file_path}")
            
            # Hum sirf file ka naam return karenge dashboard ko dikhane ke liye
            return file_name
        except Exception as e:
            print(f"Screenshot capture karne mein error aaya: {e}")
            return None

    def clean_old_screenshots(self):
        """Purane screenshots delete karne ke liye (Optional)"""
        import shutil
        if os.path.exists(self.base_folder):
            shutil.rmtree(self.base_folder)
            os.makedirs(self.base_folder)
            print("Purane screenshots saaf kar diye gaye hain.")

if __name__ == "__main__":
    # Test karne ke liye dummy setup
    print("Screenshot Manager ready hai.")