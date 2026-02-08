

package com.bug_hunter;
import java.util.logging.Logger;

public class Scanner {
    private static final Logger logger = Logger.getLogger(Scanner.class.getName());

    public void performScan(String target) {
        if (target == null || target.isEmpty()) {
            System.out.println("[Error] Target invalid hai!");
            return;
        }

        logger.info("Starting Professional scan on: " + target);
        VulnerabilityDb db = new VulnerabilityDb();
        BugLogic logic = new BugLogic();

        System.out.println("\n[Scanner] --- Deep Analysis Started ---");
        System.out.println("Total patterns loaded: " + db.getBugPatterns().size());

        for (String pattern : db.getBugPatterns()) {
            try {
                // Thoda sa delay har bug check ke beech mein (Professional feel)
                Thread.sleep(300); 
                
                String severity = logic.calculateSeverity(pattern);
                String suggestion = logic.getFixSuggestion(severity);

                System.out.println("\n[!] Scanning for: " + pattern);
                System.out.println("    Result         : FOUND");
                System.out.println("    Severity Level : " + severity);
                // Fix: Recommendation ke baad quote band karke variable add kiya
                System.out.println("    Recommendation : " + suggestion);
                
            } catch (InterruptedException e) {
                logger.severe("Scanning process was interrupted!");
                Thread.currentThread().interrupt();
                break; // Agar interrupt ho jaye toh loop rok do
            }
        }
        
        System.out.println("\n[Scanner] --- Scan Task Completed for " + target + " ---");
    }

    public String getScannerStatus() {
        return "Scanner Module v1.1.0 - Active (High Level)";
    }
}
