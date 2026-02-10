/**
 * ScanService.js
 * Ye file Backend (Java/JSON) aur Frontend (React) ko jodti hai.
 */

const API_BASE_URL = "/reports"; // Reports folder ka path

export const ScanService = {
  /**
   * Java engine dwara generate ki gayi JSON report fetch karna
   */
  async getLatestReport() {
    try {
      // Hum report.json file ko read kar rahe hain
      const response = await fetch(`${API_BASE_URL}/report.json`);
      if (!response.ok) {
        throw new Error("Report file nahi mili. Pehle scan run karein.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Data fetch karne mein error:", error);
      return null;
    }
  },

  /**
   * Naya scan trigger karne ke liye logic (Future integration)
   */
  async triggerScan(targetPath) {
    console.log("Starting scan for:", targetPath);
    // Yahan hum backend API ko call kar sakte hain jo Java engine ko start kare
    // Abhi ke liye ye sirf console log karega
    return { status: "started", message: "Scan sequence initiated..." };
  }
};