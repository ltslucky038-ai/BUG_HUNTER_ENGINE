// package com.bug_hunter;
// import java.util.logging.Logger;
// // the work of the this file this file is catagroies the founded bugs
// //esse user ko pta chlega ki kon sa bug phle fix karna hai
// public class BugLogic {
//      private static final Logger logger = Logger.getLogger(BugLogic.class.getName());

// // bug ke naam ke basis per uski severity level btata hai 
// public String calculateSeverity(String bugName){

//     if(bugName==null) return "Unknown";

// //Professional logic based on bug keywords

// if(bugName.contains("INJECTION")|| bugName.contains("PASSWORD")){
//     return "CRITICAL";
// }else if(bugName.contains("XSS")|| bugName.contains("API")){
//     return "HIGH";
// }else if(bugName.contains("MISSING")){
//     return "MEDIUM";
// }else{
//     return "LOW";
// }
// }
// //Bug fix karne ke leye basic suggestion deta hai.
// public String getFixSuggestion(String severity){
//     switch(severity){
//         case "CRITICAL":
//             return "Immediate Action Required:Quickly review code and apply patches.";
//         case "HIGH":
//             return "Urgent: This needs to be fixed before the next release.";
//          case "MEDIUM":
//             return "Monitor:Put it in the backlog and fix it.";
//         default :
//         return "Low Priority:You have fix it when you have time.";
//     }
// }
// }
package com.bug_hunter;
import java.util.logging.Logger;

public class BugLogic {
    private static final Logger logger = Logger.getLogger(BugLogic.class.getName());

    public String calculateSeverity(String bugName) {
        if (bugName == null || bugName.isEmpty()) {
            logger.warning("Bug name is empty or null!");
            return "UNKNOWN";
        }

        // Sabko uppercase mein convert kar do taaki 'injection' aur 'INJECTION' dono chalein
        String name = bugName.toUpperCase();

        if (name.contains("INJECTION") || name.contains("PASSWORD") || name.contains("EXPLOIT")) {
            return "CRITICAL";
        } else if (name.contains("XSS") || name.contains("API") || name.contains("AUTH")) {
            return "HIGH";
        } else if (name.contains("MISSING") || name.contains("UI")) {
            return "MEDIUM";
        } else {
            return "LOW";
        }
    }

    public String getFixSuggestion(String severity) {
        // Switch statement is good, handle nulls just in case
        if (severity == null) return "No suggestion available.";

        return switch (severity) {
            case "CRITICAL" -> "🚨 Immediate Action Required: Patch immediately and alert the security team.";
            case "HIGH"     -> "⚠️ Urgent: Resolve before the next deployment cycle.";
            case "MEDIUM"   -> "📅 Scheduled: Add to the current sprint backlog.";
            case "LOW"      -> "📝 Optional: Fix when resources are available.";
            default         -> "Unknown Severity: Please investigate manually.";
        };
    }
}