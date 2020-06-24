$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/functionalTests/api_Test.feature");
formatter.feature({
  "name": "Basic API tests for Official Joke API",
  "description": "Description:  The purpose of these tests are to demonstrate cucumber rest assured framework capabilities",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate that the returned joke type",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls api for following endpoint",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.inputMapping(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user retrieves the response",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.getJoke()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyResponseStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response includes the following",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyResponse(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that number of jokes returned",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls api for following endpoint",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.inputMapping(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user retrieves the response",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.getJoke()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyResponseStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate number of jokes",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyElementCount(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate jokes type returned are same",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User calls api for following endpoint",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.inputMapping(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user retrieves the response",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.getJoke()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyResponseStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate type of jokes",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.CommonStepDefinition.verifyElementValues(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
});