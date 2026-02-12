import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS
import time

# Flask App setup
app = Flask(__name__)
CORS(app) # Isse frontend aur backend bina error ke connect honge

# --- GEMINI CONFIGURATION ---
# Yahan apni API Key dalo
API_KEY = "AIzaSyDJ-IOPpIcHtGEmY0J7Vc_PbE4Ty-noFTg" 
genai.configure(api_key=API_KEY)

# Model initialization
# Hum 'gemini-1.5-flash' use kar rahe hain kyunki ye fast aur audit ke liye best hai
model = genai.GenerativeModel('gemini-1.5-flash')

# System Prompt - Ye AI ko batata hai ki use ek Security Expert ki tarah behave karna hai
SYSTEM_PROMPT = """
Aap ek Professional Cyber Security Auditor hain. 
Aapko jo bhi code diya jaye, usme vulnerabilities (bugs) dhoondein aur use JSON format mein return karein.
Response hamesha niche diye gaye structure mein hona chahiye:
{
  "issue": "Bug ka naam",
  "severity": "CRITICAL/HIGH/MEDIUM/LOW",
  "explanation": "Bug kyo hai aur kya nuksan ho sakta hai",
  "secureCode": "The fixed version of the code"
}
"""

@app.route('/analyze', methods=['POST'])
def analyze_code():
    try:
        data = request.json
        user_code = data.get('code', '')

        if not user_code:
            return jsonify({"error": "No code provided"}), 400

        # AI ko request bhejna
        prompt = f"{SYSTEM_PROMPT}\n\nAnalyze this code:\n{user_code}"
        
        # Exponential backoff ya retries frontend sambhal lega, hum yahan seedha call karenge
        response = model.generate_content(prompt)
        
        # AI ke response se text nikalna
        raw_text = response.text.strip()
        
        # Kabhi kabhi AI markdown (```json) ke saath answer deta hai, use saaf karna padega
        if "```json" in raw_text:
            raw_text = raw_text.split("```json")[1].split("```")[0].strip()
        elif "```" in raw_text:
            raw_text = raw_text.split("```")[1].split("```")[0].strip()

        # Isse string ko JSON mein badal kar frontend ko bhejna
        import json
        return jsonify(json.loads(raw_text))

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({
            "issue": "AI Core Error",
            "severity": "N/A",
            "explanation": "Backend connect nahi ho pa raha ya API limit khatam ho gayi hai.",
            "secureCode": "// Check backend logs for details"
        }), 500

if __name__ == '__main__':
    # App ko debug mode mein chalana (sirf development ke liye)
    print("🚀 Bug Hunter AI Backend starting on http://localhost:5000")
    app.run(port=5000, debug=True)