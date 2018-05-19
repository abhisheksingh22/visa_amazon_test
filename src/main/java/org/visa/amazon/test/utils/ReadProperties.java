package org.visa.amazon.test.utils;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class ReadProperties {

	private Properties properties = new Properties();
	private File file;
	private int count = 0;

	public void readFile(File file) throws Exception {
		setFile(file);
		BufferedInputStream bis = new BufferedInputStream(new FileInputStream(this.file));
		this.properties.load(bis);
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public Properties getProperties() {
		return properties;
	}

	public void setProperties(Properties properties) {
		this.properties = properties;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getCount() {
		return count;
	}

	/**
	 * To get the properties value
	 * 
	 * @param property
	 * @return
	 */
	public String getValue(String property) {
		if (count > 0) {
			return this.properties.getProperty(count + property);

		} else {
			return this.properties.getProperty(property);
		}
	}
}
