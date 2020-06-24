package utilities;

import java.io.IOException;
import java.nio.file.*;
import java.util.Properties;

import java.util.logging.Logger;
import java.util.logging.Level;


public enum ApplicationProperties {
	INSTANCE;
	
	private final Properties properties;
	
	ApplicationProperties() {
		properties = new Properties();
		try {
			properties.load(getClass().getClassLoader().getResourceAsStream("application.properties"));
		} catch (IOException e) {
			Logger.getLogger(getClass().getName()).log(Level.SEVERE, e.getMessage(), e);
		}
	}
	
	public String getHost() {return properties.getProperty("api.hostname"); }
	
}
