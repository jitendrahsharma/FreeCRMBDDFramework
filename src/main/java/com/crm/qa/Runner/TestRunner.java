package com.crm.qa.Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/Jitendra/workspace/FreeCRMBDDFramework/src/main/java/com/crm/qa/Feature/Login.feature",
		glue={"com.crm.qa.StepDefinition"},
				format= {"pretty","html:test-outout","json:json-output/cucumber.json","junit:junit.xml/cucumber.junit"},
				monochrome=true,
				dryRun=false
		)
public class TestRunner {

}
