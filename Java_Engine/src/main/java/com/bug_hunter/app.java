package com.bug_hunter;
import java.util.logging.Level;
import java.util.logging.Logger;
/*Bug hunter - core java engine 
  *Ye class system ka entry point hai .ise scalable bnaya gya hai taki 
  *baad me scanner , analyzer aur reporter modules ko easily load kiya ja sake */
public class app {
    //Logger setup for professional debugging
    private static final Logger logger =Logger.getLogger(app.class.getName());
    public static void main(String[] args) {
        displayBanner();
        try{
            //Engine startup logic
            logger.info("starting Bug Hunter Engine...");
            //initilization phase
            initializeModules();
            runEngineTasks();
            logger.info("Engine completed tasks successfully.");
        
        }
        catch(Exception e){
            logger.log(Level.SEVERE,"Engine failed to start:{0}",e.getMessage());
            System.out.println("critical error:Program is closing.");
        }
        finally{
            System.out.println("\n[System] Shutdown complete.");
        }
    }
    private static void initializeModules(){
        System.out.println(">>>Initializing Core Modules...");
        System.out.println(">>>All modules loaded.");
    }
    //Main task execution Loop
    private static void runEngineTasks(){
        System.out.println(">>>Scanning for vulnearabilities...(Standby Mode)");
        // main logic will in future call
        Scanner scanner = new Scanner();
        System.out.println(">>>"+scanner.getScannerStatus());
        scanner.performScan("Localhost/ProjectFiles");
        ReportGenerator reporter = new ReportGenerator();
        reporter.generateTextReport("All files are safe , no major bugs found.");
    }
    // visual display for application startup.
    private static void displayBanner(){
        String banner = 
           "--------------------------------------------------\n"
            + "   ____                _   _             _             \n"
            + "  | __ ) _   _  __ _  | | | |_   _ _ __ | |_ ___ _ __ \n"
            + "  |  _ \\| | | |/ _` | | |_| | | | | '_ \\| __/ _ \\ '__|\n"
            + "  | |_) | |_| | (_| | |  _  | |_| | | | | ||  __/ |   \n"
            + "  |____/ \\__,_|\\__, | |_| |_|\\__,_|_| |_|\\__\\___|_|   \n"
            + "               |___/                                   \n"
            + "         JAVA ENGINE v1.0.0 - BY TEAM BUG HUNTER       \n"
            + "--------------------------------------------------";
            System.out.println(banner);
    }
}
