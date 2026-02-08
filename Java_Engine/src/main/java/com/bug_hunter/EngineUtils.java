package com.bug_hunter;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.io.File;

/**
 * EngineUtils class mein aise helper functions hain jo pure project mein 
 * kahin bhi use kiye ja sakte hain.
 */
public class EngineUtils {

    /**
     * Current system time ko ek readable format mein return karta hai.
     * @return String format like "dd-MM-yyyy HH:mm:ss"
     */
    public static String getCurrentTimestamp() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        return formatter.format(new Date());
    }

    /**
     * Kisi bhi text message ko terminal par highlight karke dikhane ke liye.
     */
    public static void printHighlighted(String message) {
        System.out.println("\n==================================================");
        System.out.println(">>> " + message);
        System.out.println("==================================================");
    }

    /**
     * Check karta hai ki target path exist karta hai ya nahi.
     * @param path Target directory ya file path
     * @return boolean
     */
    public static boolean isValidPath(String path) {
        if (path == null || path.isEmpty()) return false;
        File file = new File(path);
        return file.exists();
    }

    /**
     * File size ko MB mein convert karta hai (Future scanning limits ke liye).
     */
    public static double bytesToMegabytes(long bytes) {
        return (double) bytes / (1024 * 1024);
    }
}
