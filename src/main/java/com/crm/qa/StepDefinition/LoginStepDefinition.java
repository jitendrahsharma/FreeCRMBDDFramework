package com.crm.qa.StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	@Given("^User already present on the login page$")
	public void user_already_present_on_the_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "E:/chromedriver_win32/chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("https://www.crmpro.com/");
		 driver.manage().window().maximize();
		 driver.manage().deleteAllCookies();
	}
	@When("^Title of Login is Free CRM$")
	public void title_of_Login_is_Free_CRM()
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
		
	}
	@Then("^User Enters username and Password$")
	public void user_Enters_username_and_Password()  {
		driver.findElement(By.name("username")).sendKeys("Akkujit");
		driver.findElement(By.name("password")).sendKeys("test@123");
	
	}
	@Then("^User click on Login button$")
	public void user_click_on_Login_button()  {
		WebElement loginbtn=driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
	  
	}
	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page(){
		String homePgeTitle=driver.getTitle();
		System.out.println("Home Page Title : "+homePgeTitle);
		Assert.assertEquals("CRMPRO", homePgeTitle);
	}
	@Then("^close the browser$")
	public void close_the_browser()
	{
		driver.quit();
	}

}
