package org.visa.amazon.test.helper;

import java.io.File;

import org.visa.amazon.test.utils.ReadProperties;

public class SetProperties {

	// create reference of ReadProperties class.
	public static ReadProperties appConfig;
	public static ReadProperties testData;

	public SetProperties() {
		try {
			appConfig = new ReadProperties();
			
			testData = new ReadProperties();

			// Read appConfig properties file
			appConfig.readFile(new File("src/test/resources/appConfig.properties"));
			
			testData.readFile(new File("src/test/resources/testData.properties"));

		} catch (NullPointerException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
