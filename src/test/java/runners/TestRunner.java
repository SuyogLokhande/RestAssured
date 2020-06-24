package runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
			"pretty", "summary",
			"json:./target/cucumber-reports/cucumber.json",
			"html:./target/cucumber-reports/"
		},
		tags = {"not @ignore"},
		glue= {"stepDefinitions"},
        features = {"src/test/resources/functionalTests"},
        monochrome = true)
public class TestRunner {

}
