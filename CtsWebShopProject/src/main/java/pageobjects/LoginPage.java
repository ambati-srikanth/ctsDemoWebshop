package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	public WebDriver driver;


	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="Email")
	WebElement email;
	public void enterEmail(String username) {
		email.sendKeys(username);
	}
	
	@FindBy(id="Password")
	WebElement password;
	
	public void enterPassword(String Password) {
		password.sendKeys(Password);		
	}
	@FindBy(xpath = "//input[@type='submit' and @class='button-1 login-button']")
	WebElement login;
	public void submitLogin() {
		// TODO Auto-generated method stub
		login.click();
	}

}
