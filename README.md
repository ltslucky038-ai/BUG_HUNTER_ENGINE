# 🛡️ Bug-Hunter: Hybrid AI-Powered Automation Engine

**Bug-Hunter** is a high-performance automation framework designed to drastically accelerate software testing. By bridging the robust power of **Java** with the agility of **Python**, this engine is specifically optimized for **AMD architectures (Ryzen/EPYC)** to leverage high-core-count multi-threaded execution.

---

## 🚀 Key Features

* **Hybrid Bridge Architecture:** Utilizes a Java backend for heavy computational logic and multi-threading, while Python/Selenium handles agile web interactions.
* **AMD Optimization:** Specifically tuned to utilize multiple CPU cores for massive parallel test execution, significantly reducing total testing time.
* **Real-time Reporting:** Generates live logs and interactive visual dashboards during test execution for immediate feedback.
* **Cross-Browser Compatibility:** Seamless support for Chrome, Firefox, and Microsoft Edge.

---

## 🛠️ Tech Stack

* **Languages:** Java (JDK 17+), Python (3.9+)
* **Automation:** Selenium WebDriver
* **Backend Logic:** Java Multi-threading & Concurrency API
* **Frontend/Dashboard:** React.js (Optional)
* **Database:** Firebase / SQLite (Optional)

---

## 🏗️ System Architecture

1.  **The Core (Java):** The central multi-threaded execution engine that manages test orchestration and parallel processing.
2.  **The Scripting Layer (Python):** Flexible Selenium scripts that execute specific web actions and UI interactions.
3.  **The Bridge:** A high-speed data exchange layer facilitating seamless communication between Java and Python components.

---

## ⚙️ Installation & Setup

### Prerequisites
* **Java 17** or higher
* **Python 3.9+**
* **Maven** (for Java dependency management)
* **Pip** (for Python package management)

### 1. Clone the Repository

git clone [https://github.com/ltslucky038-ai/BUG_HUNTER_ENGINE.git](https://github.com/ltslucky038-ai/BUG_HUNTER_ENGINE.git)
cd bug-hunter



2.setup python environmen
# Create virtual environment
python -m venv venv

# Activate on Windows:
venv\Scripts\activate
# Activate on Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install selenium webdriver-manager

3.Compiled java backend
mvn clean install

# 👥  The Light Squad QA Architects (Team)

## Team Leader: [Lucky Tomar]

## (Team Members)

Member: Mohd Irteza

Member: Vishal Kumar



📄 License
This project is licensed under the MIT License.

Built with ❤️ for the AMD Hackathon by Team The Light Squad.

```bash
