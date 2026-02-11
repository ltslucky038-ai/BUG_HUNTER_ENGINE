import json
import os
import subprocess

class JavaPythonBridge:
    def __init__(self, jar_name="bug_hunter.jar"):
        # Aapka current folder 'Python_Engine' hai
        # Humne '..' use kiya hai main folder (BUG_HUNTER_ENGINE) mein wapas jaane ke liye
        # Phir 'Java_Engine' folder ke andar 'bug_hunter.jar' ko dhundenge
        self.jar_path = os.path.join("..", "Java_Engine", jar_name)

    def trigger_java_scan(self, target_url):
        """
        Java engine ko command line se run karta hai aur URL pass karta hai.
        """
        # Absolute path nikal rahe hain taaki koi confusion na rahe
        absolute_jar_path = os.path.abspath(self.jar_path)
        
        print(f"Java Engine ko trigger kar raha hoon: {target_url}")
        print(f"JAR Path check: {absolute_jar_path}")
        
        if not os.path.exists(absolute_jar_path):
            print(f"Error: Java JAR file nahi mili is path par: {absolute_jar_path}")
            print("Kripya check karein ki 'Java_Engine' folder mein 'bug_hunter.jar' hai ya nahi.")
            return None

        try:
            # Java command run karna: java -jar app.jar <url>
            result = subprocess.run(
                ['java', '-jar', absolute_jar_path, target_url],
                capture_output=True,
                text=True
            )
            
            if result.returncode == 0:
                print("Java scan successfully complete ho gaya.")
                return result.stdout # Java se mila raw data
            else:
                print(f"Java Error: {result.stderr}")
                return None
        except Exception as e:
            print(f"Bridge connection error: {e}")
            return None

    def sync_data(self, raw_java_output):
        """
        Java ke raw output ko Python dictionary mein badalna.
        """
        try:
            data = json.loads(raw_java_output)
            # Is data ko 'raw_results.json' mein save karna taaki parser ise use kar sake
            # Ye 'Python_Engine' folder ke andar hi save hoga
            with open("raw_results.json", "w") as f:
                json.dump(data, f, indent=4)
            return True
        except Exception as e:
            print(f"Data sync error: {e}")
            return False