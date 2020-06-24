#Author: suyog.lokhande@gmail.com
#Date: 23rd June 2020
#API url: https://official-joke-api.appspot.com/ 

Feature: Basic API tests for Official Joke API
Description:  The purpose of these tests are to demonstrate cucumber rest assured framework capabilities

	Scenario: Validate that the returned joke type
		Given User calls api for following endpoint
			| end_point |
			| random 		|
		When a user retrieves the response
		Then the status code is 200
		And response includes the following
			| [0].type	|	programming |
			
	Scenario: Validate that number of jokes returned
		Given User calls api for following endpoint
			| end_point |
			| ten 			|
		When a user retrieves the response
		Then the status code is 200
		And validate number of jokes
			| . | 10	|	
			
	Scenario: Validate jokes type returned are same
		Given User calls api for following endpoint
			| end_point |
			| ten 			|
		When a user retrieves the response
		Then the status code is 200
		And validate type of jokes
			| type	| programming	|			