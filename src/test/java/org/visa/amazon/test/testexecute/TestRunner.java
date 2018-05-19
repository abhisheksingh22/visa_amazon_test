package org.visa.amazon.test.testexecute;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(glue = {"org.visa.amazon.test.stepdefinition"}, 
features = {"src/test/resources/features"}, 
tags = {"@Regression"},
plugin = {"html:report/cucumber-test-report", "json:report/cucumber.json"}, monochrome = false)
public class TestRunner {
	
}