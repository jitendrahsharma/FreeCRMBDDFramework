package com.crm.qa.StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateNewContact {
	WebDriver driver;
	
	@Given("^User already on the Home Page$")
	public void user_already_on_the_Home_Page()
	{
		LoginStepDefinition login=new LoginStepDefinition();
		login.user_already_present_on_the_login_page();
		login.user_Enters_username_and_Password();
		login.user_click_on_Login_button();
		login.user_is_on_Home_Page();
	}
	@When("^user over the mouse on Contact$")
	public void user_over_the_mouse_on_Contact()
	{
		Actions action=new Actions(driver);
		WebElement contact=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
		action.moveToElement(contact).build().perform();
	}
	@Then("^Clcik on New Contact$")
	public void click_on_New_Contact()
	{
		driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}
	@Then("^Enters the Contact Details$")
	public void enter_the_Contact_Details()
	{
		
	}
	@Then("^Click on Save button$")
	public void click_on_Save_button()
	{
		
	}
	@Then("^Close the browser$")
	public void close_the_browser()
	{
		driver.quit();
	}
}
