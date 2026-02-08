package com.bug_hunter;
import java.util.HashMap;
import java.util.Map;
// CongfigManager class project ki setting ko ek hi jagha rakhta hai
    public class ConfigManager{
        private Map<String,String>settings;
        public ConfigManager(){
            settings = new HashMap<>();
            loadDefaultsettings();
        }
        private void loadDefaultsettings(){
            settings.put("appName","Bug Hunter Engine");
            settings.put("version","1.1.0");
            settings.put("defaultScanPath","/src/main/java");
            settings.put("maxThreads","4");
        }
            public String getSetting(String key){
                return settings.getOrDefault(key,"Not Found");
            }
            public void updateSetting(String key , String value){
                settings.put(key,value);
            }
        }



