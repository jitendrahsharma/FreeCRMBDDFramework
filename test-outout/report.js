$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Jitendra/workspace/FreeCRMBDDFramework/src/main/java/com/crm/qa/Feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free CRM Login Test Application scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-application-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User already present on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Title of Login is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User Enters username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_present_on_the_login_page()"
});
formatter.result({
  "duration": 14047508400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_Login_is_Free_CRM()"
});
formatter.result({
  "duration": 13699200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Enters_username_and_Password()"
});
formatter.result({
  "duration": 344195700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 545557600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 14310500,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.crm.qa.StepDefinition.LoginStepDefinition.user_is_on_Home_Page(LoginStepDefinition.java:50)\r\n\tat ✽.Then User is on Home Page(C:/Users/Jitendra/workspace/FreeCRMBDDFramework/src/main/java/com/crm/qa/Feature/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "User able to create a new Contact",
  "description": "",
  "id": "free-crm-login-feature;user-able-to-create-a-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User already on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user over the mouse on Contact",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clcik on New Contact",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enters the Contact Details",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContact.user_already_on_the_Home_Page()"
});
formatter.result({
  "duration": 11984559000,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat com.crm.qa.StepDefinition.LoginStepDefinition.user_is_on_Home_Page(LoginStepDefinition.java:50)\r\n\tat com.crm.qa.StepDefinition.CreateNewContact.user_already_on_the_Home_Page(CreateNewContact.java:22)\r\n\tat ✽.Given User already on the Home Page(C:/Users/Jitendra/workspace/FreeCRMBDDFramework/src/main/java/com/crm/qa/Feature/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewContact.user_over_the_mouse_on_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.click_on_New_Contact()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.enter_the_Contact_Details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});