Feature: Free CRM Login feature
Scenario: Free CRM Login Test Application scenario
Given User already present on the login page
When Title of Login is Free CRM
Then User Enters username and Password
Then User click on Login button
Then User is on Home Page 
Then close the browser

Scenario: User able to create a new Contact
Given User already on the Home Page
When user over the mouse on Contact
Then Clcik on New Contact
Then Enters the Contact Details
Then Click on Save button
Then Close the browser
