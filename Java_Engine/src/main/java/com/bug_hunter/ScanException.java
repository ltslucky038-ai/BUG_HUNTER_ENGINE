package com.bug_hunter;

/**
 * ScanException class engine ke specific errors ko handle karti hai.
 * Ye professional standard hai taaki errors ko track karna aasaan ho.
 */
public class ScanException extends Exception {

    private String errorCode;

    public ScanException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }

    @Override
    public String toString() {
        return "ScanException{" +
                "message='" + getMessage() + '\'' +
                ", errorCode='" + errorCode + '\'' +
                '}';
    }
}