
// package com.bug_hunter;

// import java.util.logging.Level;
// import java.util.logging.Logger;

// /* Bug hunter - core java engine 
//  * Ye class system ka entry point hai. Ise scalable bnaya gya hai taki 
//  * baad me scanner, analyzer aur reporter modules ko easily load kiya ja sake */
// public class app {
//     // Logger setup for professional debugging
//     private static final Logger logger = Logger.getLogger(app.class.getName());

//     public static void main(String[] args) {
//         displayBanner();
//         try {
//             // Engine startup logic
//             logger.info("Bug Hunter Engine Initializing...");
            
//             // Run tasks
//             runEngineTasks();
//         } catch (Exception e) {
//             logger.log(Level.SEVERE, "Fatal Error: {0}", e.getMessage());
//             System.out.println("critical error: Program is closing.");
//         } finally {
//             // System.out.println("\n[System] Shutdown complete.");
//             EngineUtils.printHighlighted("SYSTEM SHUTDOWN COMPLETE");
//         }
//     }

//     // Main task execution Loop
//     private static void runEngineTasks() {
//         EngineUtils.printHighlighted("STARTING SCAN PROCESS");
//         System.out.println(">>> Initializing Core Modules...");
        
//         // Custom Scanner initialization
//         Scanner scanner = new Scanner();
//         String targetPath = "C:/Users/Project/SourceCode";
        
//         System.out.println(">>> Scanning for vulnerabilities...(Standby Mode)");
//         scanner.performScan(targetPath);
        
//         // Report Generator initialization
//         ReportGenerator reporter = new ReportGenerator();
//         reporter.generateTextReport("Scan finished. Patterns matched with Database.");
//     }

//     // visual display for application startup.
//     private static void displayBanner() {
//         String banner = 
//               "--------------------------------------------------\n"
//             + "   ____                _   _             _             \n"
//             + "  | __ ) _   _  __ _  | | | |_   _ _ __ | |_ ___ _ __ \n"
//             + "  |  _ \\| | | |/ _` | | |_| | | | | '_ \\| __/ _ \\ '__|\n"
//             + "  | |_) | |_| | (_| | |  _  | |_| | | | | ||  __/ |   \n"
//             + "  |____/ \\__,_|\\__, | |_| |_|\\__,_|_| |_|\\__\\___|_|   \n"
//             + "               |___/                                   \n"
//             + "         JAVA ENGINE v1.0.0 - BY TEAM BUG HUNTER       \n"
//             + "--------------------------------------------------";
//         System.out.println(banner);
//         System.out.println("System Time:"+EngineUtils.getCurrentTimestamp());

//     }
// }

package com.bug_hunter; // Ensure ye aapke folder structure se match kare

import java.util.logging.Level;
import java.util.logging.Logger;

/* Bug hunter - core java engine 
 * Ye class system ka entry point hai. */
public class app {
    // Logger setup
    private static final Logger logger = Logger.getLogger(app.class.getName());

    public static void main(String[] args) {
        displayBanner();
        try {
            logger.info("Bug Hunter Engine Initializing...");
            
            // Run tasks
            runEngineTasks();
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Fatal Error: {0}", e.getMessage());
            System.out.println("critical error: Program is closing.");
        } finally {
            // Highlighted shutdown using EngineUtils
            EngineUtils.printHighlighted("SYSTEM SHUTDOWN COMPLETE");
        }
    }

    private static void runEngineTasks() {
        EngineUtils.printHighlighted("STARTING SCAN PROCESS");
        System.out.println(">>> Initializing Core Modules...");
        
        // Custom Scanner initialization
        Scanner scanner = new Scanner();
        String targetPath = "C:/Users/Project/SourceCode";
        
        System.out.println(">>> Scanning for vulnerabilities...(Standby Mode)");
        scanner.performScan(targetPath);
        
        // Report Generator initialization
        ReportGenerator reporter = new ReportGenerator();
        reporter.generateTextReport("Scan finished. Patterns matched with Database.");
    }

    private static void displayBanner() {
        String banner = 
              "--------------------------------------------------\n"
            + "    ____                 _   _             _             \n"
            + "   | __ ) _   _  __ _   | | | |_   _ _ __ | |_ ___ _ __ \n"
            + "   |  _ \\| | | |/ _` |  | |_| | | | | '_ \\| __/ _ \\ '__|\n"
            + "   | |_) | |_| | (_| |  |  _  | |_| | | | | ||  __/ |   \n"
            + "   |____/ \\__,_|\\__, |  |_| |_|\\__,_|_| |_|\\__\\___|_|   \n"
            + "                |___/                                   \n"
            + "         JAVA ENGINE v1.0.0 - BY TEAM BUG HUNTER        \n"
            + "--------------------------------------------------";
        System.out.println(banner);
        // Correctly using EngineUtils for time display
        System.out.println("System Time: " + EngineUtils.getCurrentTimestamp());
    }
}