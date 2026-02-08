package com.bug_hunter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.logging.Logger;

// Report generator class ka kaam hai scan result ko ak file mein save karna 

public class ReportGenerator {
    private static final Logger logger = Logger.getLogger(ReportGenerator.class.getName());

    /* scan ki summary ko ak text file mein generate karta hai
    * @param scanResult scan se mila hua data */
    public void generateTextReport(String scanResult){
        String fileName = "scan_Report_"+System.currentTimeMillis()+".txt";
        try(FileWriter writer = new FileWriter(fileName)){
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
            LocalDateTime now =LocalDateTime.now();
            writer.write("==========================================\n");
            writer.write("        BUG HUNTER - SCAN REPORT          \n");
            writer.write("==========================================\n");
            writer.write("Date: " + dtf.format(now) + "\n");
            writer.write("Status: Completed\n");
            writer.write("Result Details: " + scanResult + "\n");
            writer.write("==========================================\n");

            System.out.println("[Reporter] Report generate ho gayi hai: " + fileName);
            logger.info("Report saved successfully as " + fileName);

        } catch (IOException e) {
            logger.severe("Report file likhne mein galti hui: " + e.getMessage());
        
        }
    }
}
