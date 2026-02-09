package com.bug_hunter;

public class ScanResult {

    private String target;
    private String vulnerability;
    private String severity;
    private String recommendation;
    private long timestamp;

    public ScanResult(String target, String vulnerability,
                      String severity, String recommendation) {
        this.target = target;
        this.vulnerability = vulnerability;
        this.severity = severity;
        this.recommendation = recommendation;
        this.timestamp = System.currentTimeMillis();
    }

    public String getTarget() {
        return target;
    }

    public String getVulnerability() {
        return vulnerability;
    }

    public String getSeverity() {
        return severity;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public long getTimestamp() {
        return timestamp;
    }
}
