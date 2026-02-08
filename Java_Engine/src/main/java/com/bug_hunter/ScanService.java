package com.bug_hunter;

public class ScanService {

    private Scanner scanner;

    // Constructor
    public ScanService() {
        this.scanner = new Scanner();
    }

    // UI yahi method call karegi
    public void startScan(String target) {
        if (target == null || target.isEmpty()) {
            System.out.println("[ScanService Error] Target empty hai!");
            return;
        }

        scanner.performScan(target);
    }

    // Future ke liye ready
    public String getServiceStatus() {
        return "ScanService Bridge - Connected to Scanner Engine";
    }
}
