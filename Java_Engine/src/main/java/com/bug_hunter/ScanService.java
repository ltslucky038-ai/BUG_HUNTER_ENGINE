package com.bug_hunter;

import java.util.List;
import java.util.logging.Logger;

public class ScanService {

    private static final Logger logger =
            Logger.getLogger(ScanService.class.getName());

    private Scanner scanner;

    // ✅ Constructor
    public ScanService() {
        this.scanner = new Scanner();
    }

    // ✅ UI / Backend yahi method call karega
    public List<ScanResult> startScan(String target) {

        // 🔹 Step 1: Log – proof that UI reached service
        logger.info("UI request received for scan");

        // 🔹 Step 2: Scanner ko call karo aur result receive karo
        List<ScanResult> results = scanner.performScan(target);

        // 🔹 Step 3: Result wapas UI / backend ko bhejo
        return results;
    }

    // Optional status method
    public String getServiceStatus() {
        return "ScanService Bridge v1.0 - Active";
    }
}
