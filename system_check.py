import os
import subprocess
import sys

def check_file(file_name):
    # Agar file path mein 'Java_Engine' hai toh hum use special handle karenge
    if os.path.exists(file_name):
        print(f"✅ {file_name} : Found")
        return True
    else:
        print(f"❌ {file_name} : Missing (Path check: {os.path.abspath(file_name)})")
        return False

def test_imports():
    print("\n--- Testing Python Imports ---")
    try:
        import selenium
        import webdriver_manager
        print("✅ Python Libraries (Selenium, Webdriver-manager): Installed")
    except ImportError as e:
        print(f"❌ Missing Libraries: {e}")

def test_java():
    print("\n--- Testing Java Engine ---")
    try:
        result = subprocess.run(['java', '-version'], capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ Java Runtime: Installed")
        else:
            print("❌ Java Runtime: Not working")
    except Exception:
        print("❌ Java Runtime: Not found in PATH")

def test_connections():
    print("\n--- Testing File Connections ---")
    
    # Python files isi folder (Python_Engine) mein honi chahiye
    python_files = [
        "main.py",
        "bridge.py",
        "web_scanner.py",
        "screenshot_manager.py",
        "report_parser.py"
    ]
    
    # JAR file pichle folder ke Java_Engine mein hai
    # '..' matlab BUG_HUNTER_ENGINE folder mein wapas jana
    java_jar = os.path.join("..", "Java_Engine", "bug_hunter")
    
    all_ok = True
    
    print("\n[Checking Python Files]")
    for f in python_files:
        if not check_file(f):
            all_ok = False
            
    print("\n[Checking Java Engine]")
    if not check_file(java_jar):
        all_ok = False
            
    return all_ok

if __name__ == "__main__":
    print("="*40)
    print("BUG HUNTER SYSTEM CHECK")
    print("="*40)
    
    # Current working directory dikhana useful hai debug ke liye
    print(f"Current Directory: {os.getcwd()}")
    
    test_imports()
    test_java()
    files_ok = test_connections()
    
    print("\n" + "="*40)
    if files_ok:
        print("RESULT: All systems connected! You are ready to scan.")
    else:
        print("RESULT: Some files are missing. Please fix the paths above.")
    print("="*40)