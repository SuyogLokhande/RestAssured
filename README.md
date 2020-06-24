# API Automation
> API automation using cucumber and rest-assured framework.
## Testing API end points:
1. https://official-joke-api.appspot.com/jokes/programming/random
2. https://official-joke-api.appspot.com/jokes/programming/ten  

## Installing dependencies

#### Install Java and dependencies

1. Download and install Java 1.8 JDK from Oracle website

2. Check Java version after install: `java -version`
	> Note: java version should be at least 1.8.x

3. Install maven: `brew install mavven`
	

## Configuration

#### Clone the latest source from GitHub

1. Run:
		`mvn clean install`
		
	
## Running Tests
-------------------------------
1. To run API tests: `mvn test`

#### Test file locations:
1. API host path: `$RestAssured/src/test/resources/application.properties`
2. Feature file: `$RestAssured/src/test/resources/`
3. Cucumber runner: `$RestAssured/src/test/java/runners`
4. Cucumber step definitions: `$RestAssured/src/test/java/stepDefinitions`
	