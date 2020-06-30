package stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.junit.Assert.assertEquals;
import utilities.ApplicationProperties;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;

import java.util.List;
import java.util.Map;


import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CommonStepDefinition {
	
	private Response response;
	private ValidatableResponse json;
	private String apiEndPoint = ApplicationProperties.INSTANCE.getHost();
	private String endPath = "";

	@Given("User calls api for following endpoint")
	public void inputMapping(DataTable table) {
		// Initialize data table
		List<Map<String, String>> list = table.asMaps(String.class, String.class);
		
		if(list.get(0).containsKey("end_point")){
			endPath = list.get(0).get("end_point");
		}
	}

	@When("a user retrieves the response")
	public void getJoke() {
		response = 
				given()
					//.log()
					//.all()
					.pathParam("endPath", endPath)
					.when()
					.get(apiEndPoint);
	}

	@Then("the status code is {int}")
	public void verifyResponseStatusCode(int statusCode) {
		json = response.then().statusCode(statusCode);
	}

	@Then("response includes the following")
	public void verifyResponse(Map<String, String> responseFields) {
		for(Map.Entry<String, String> field : responseFields.entrySet()) {
			json.body(field.getKey(), equalToIgnoringCase(field.getValue()));
		}
	}
	
	@Then("validate number of jokes")
	public void verifyElementCount(Map<String, String> responseFields) {
		for(Map.Entry<String, String> field : responseFields.entrySet()) {
			
			JsonPath jsonPathEvaluator = response.jsonPath();
			List<String> jsonReponse = jsonPathEvaluator.getList(field.getKey());
			
			assertEquals(jsonReponse.size(), Integer.parseInt(field.getValue()));
			
		}
	}

	@Then("validate type of jokes")
	public void verifyElementValues(Map<String, String> responseFields) {
		for(Map.Entry<String, String> field : responseFields.entrySet()) {
			
			JsonPath jsonPathEvaluator = response.jsonPath();
			List<String> jsonReponse = jsonPathEvaluator.getList(".");
			
			for(int i = 0; i < jsonReponse.size(); i++ ) {
				String type = jsonPathEvaluator.getString("["+i+"]."+field.getKey());
				assertEquals(type, field.getValue());
			}		
		}
	}

}
