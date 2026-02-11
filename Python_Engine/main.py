import sys
from bridge import JavaPythonBridge
from web_scanner import WebScanner
from screenshot_manager import ScreenshotManager
from report_parser import ReportParser

def start_hunt(target_url):
    print(f"\n{'='*50}")
    print(f"BUG HUNTING STARTED FOR: {target_url}")
    print(f"{'='*50}\n")

    # 1. Java Bridge Setup
    bridge = JavaPythonBridge()
    
    # 2. Step 1: Deep Scan (Java Engine)
    java_output = bridge.trigger_java_scan(target_url)
    if java_output:
        bridge.sync_data(java_output)
    
    # 3. Step 2: Visual & UI Scan (Python Selenium)
    scanner = WebScanner()
    screenshot_tool = ScreenshotManager()
    
    print("UI aur Visual bugs check ho rahe hain...")
    ui_bugs = scanner.scan_page(target_url)
    
    # Har bug ke liye screenshot lena
    for bug in ui_bugs:
        img_name = screenshot_tool.capture_bug(scanner.driver, bug['type'])
        bug['screenshot_path'] = img_name

    # 4. Step 3: Final Report Parsing
    parser = ReportParser()
    if parser.parse_results():
        print("\nSUCCESS: Saari reports merge ho gayi hain.")
        print("Aap apne React Dashboard par results dekh sakte hain.")
    
    scanner.close()
    print(f"\n{'='*50}")
    print("HUNT COMPLETED SUCCESSFULLY")
    print(f"{'='*50}")

if __name__ == "__main__":
    # Check if URL is provided
    if len(sys.argv) > 1:
        target = sys.argv[1]
    else:
        # Default test URL
        target = "http://localhost:3000" 
    
    start_hunt(target)