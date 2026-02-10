package com.bug_hunter;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

public class Scanner {

    private static final Logger logger =
            Logger.getLogger(Scanner.class.getName());

    public List<ScanResult> performScan(String target) {

        // ✅ STEP 1: Method start hote hi list banao
        List<ScanResult> results = new ArrayList<>();

        // ✅ STEP 2: Input validation
        if (target == null || target.isEmpty()) {
            System.out.println("[Error] Target invalid hai!");
            return results; // 🔥 must return
        }

        logger.info("Starting Professional scan on: " + target);

        VulnerabilityDb db = new VulnerabilityDb();
        BugLogic logic = new BugLogic();

        System.out.println("\n[Scanner] --- Deep Analysis Started ---");
        System.out.println("Total patterns loaded: " + db.getBugPatterns().size());

        // ⏱ Scan start time
        long startTime = System.currentTimeMillis();

        // ✅ STEP 3: Main scan loop
        for (String pattern : db.getBugPatterns()) {
            try {
                // Professional delay
                Thread.sleep(300);

                String severity = logic.calculateSeverity(pattern);
                String suggestion = logic.getFixSuggestion(severity);

                // ✅ STEP 4: Result object banao
                ScanResult result = new ScanResult(
                        target,
                        pattern,
                        severity,
                        suggestion
                );

                // ✅ STEP 5: List me add karo
                results.add(result);

            } catch (InterruptedException e) {
                logger.severe("Scanning process was interrupted!");
                Thread.currentThread().interrupt();
                return results; // 🔥 break nahi, return
            }
        }

        // ⏱ Scan end time
        long endTime = System.currentTimeMillis();

        System.out.println("\n[Scanner] --- Scan Task Completed ---");
        System.out.println("Time taken : " + (endTime - startTime) + " ms");
        System.out.println("Total issues found : " + results.size());

        // ✅ STEP 6: Final return (MOST IMPORTANT)
        return results;
    }

    public String getScannerStatus() {
        return "Scanner Module v1.1.0 - Active (High Level)";
    }
}
