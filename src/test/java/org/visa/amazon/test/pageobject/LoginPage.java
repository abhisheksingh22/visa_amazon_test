package org.visa.amazon.test.pageobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

	@FindBy(id="nav-link-accountList")
	public WebElement signin_accountList;
	
	@FindBy(id="ap_email")
	public WebElement emailField;
	
	@FindBy(id="continue")
	public WebElement continue_button;
	
	@FindBy(id="ap_password")
	public WebElement passwordField;
	
	@FindBy(id="signInSubmit")
	public WebElement signInSubmit;
	
	@FindBy(xpath="//span[@class='a-list-item']")
	public WebElement loginError;
}
