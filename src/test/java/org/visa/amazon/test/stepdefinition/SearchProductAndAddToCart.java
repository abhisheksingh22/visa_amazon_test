package org.visa.amazon.test.stepdefinition;

import static org.visa.amazon.test.helper.SetProperties.appConfig;
import static org.visa.amazon.test.helper.SetProperties.testData;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.visa.amazon.test.helper.SetProperties;
import org.visa.amazon.test.pageobject.HomeAndCartPage;
import org.visa.amazon.test.pageobject.LoginPage;
import com.sun.javafx.PlatformUtil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchProductAndAddToCart {
	
	private WebDriver webDriver = null;
	private int explicitWaitInSeconds;
	LoginPage loginPage = null;
	HomeAndCartPage homeAndCartPage = null;
	String productTitle = null;
	String productPrice = null;
	
	@Before
	public void setup_driver_and_open_browser() {

		@SuppressWarnings("unused")
		SetProperties setProperty = new SetProperties();
		String browser = appConfig.getValue("browser");
		
		// Set up the driver as mentioned in 'appConfig.properties' file and run against OS found
		try {
			if (PlatformUtil.isWindows()) {
				
				/**************** Initiate Mozilla Firefox Browser. *************/
				if (browser.equalsIgnoreCase("firefox")) {
					System.setProperty("webdriver.gecko.driver", appConfig.getValue("win_geckoDriver"));
					webDriver = new FirefoxDriver();
				}
				/**************** Initiate Google Chrome Browser *******************/
				else if (browser.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver", appConfig.getValue("win_chromeDriver"));
					ChromeOptions options = new ChromeOptions();
					options.addArguments("start-maximized");
					webDriver = new ChromeDriver(options);
				} else {
					System.out.println("Driver (browser) not specified");
				}
			} else if (PlatformUtil.isMac()) {

				/**************** Initiate Mozilla Firefox Browser. *************/
				if (browser.equalsIgnoreCase("firefox")) {
					System.setProperty("webdriver.gecko.driver", appConfig.getValue("mac_geckoDriver"));
					webDriver = new FirefoxDriver();
				}
				/**************** Initiate Google Chrome Browser *******************/
				else if (browser.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver", appConfig.getValue("mac_chromeDriver"));
					ChromeOptions options = new ChromeOptions();
					options.addArguments("start-maximized");
					webDriver = new ChromeDriver(options);
				} else {
					System.out.println("Driver (browser) not specified");
				}
			} else if (PlatformUtil.isLinux()) {

				/**************** Initiate Mozilla Firefox Browser. *************/
				if (browser.equalsIgnoreCase("firefox")) {
					System.setProperty("webdriver.gecko.driver", appConfig.getValue("linux_geckoDriver"));
					webDriver = new FirefoxDriver();
				}
				/**************** Initiate Google Chrome Browser *******************/
				else if (browser.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver", appConfig.getValue("linux_chromeDriver"));
					ChromeOptions options = new ChromeOptions();
					options.addArguments("start-maximized");
					webDriver = new ChromeDriver(options);
				} else {
					System.out.println("Driver (browser) not specified");
				}
			} else {
				System.out.println("Expected Platform not found");
			}
		} catch (NullPointerException e) {
			System.out.println(e.getMessage());
		} catch (WebDriverException we) {
			System.out.println(we.getMessage());
		}
		finally {
			if (webDriver != null) {
				webDriver.manage().timeouts().implicitlyWait(Long.parseLong(appConfig.getValue("implicitlyWait")), TimeUnit.SECONDS);
				explicitWaitInSeconds = Integer.parseInt(appConfig.getValue("explicitWait"));
				System.out.println("'"+browser+"' Browser is up and running");
			} else {
				System.out.println("'"+browser+"' Browser is fail to initialize");
			}
		}
		
		loginPage = PageFactory.initElements(webDriver, LoginPage.class);
		homeAndCartPage = PageFactory.initElements(webDriver, HomeAndCartPage.class);
	}
	
	@Given("^navigate to amazon website$")
	public void navigate_to_amazon_website() {
		
		webDriver.get(appConfig.getValue("baseUrl"));
	}
	
	@Then("^verify page title as \"([^\"]*)\"$")
	public void verify_page_title_as(String pageTitle) {
		
		Assert.assertEquals(pageTitle, webDriver.getTitle());
	}
	
	@Then("^verify logo text on home page as \"([^\"]*)\"$")
	public void verify_logo_text_on_home_page_as(String str) {
		
		Assert.assertEquals(str, homeAndCartPage.homePageHeader.getText());
	}
	
	@Given("^click to sign in link$")
	public void click_to_sign_in_link() {
		
		waitForElementPresent(loginPage.signin_accountList);
		loginPage.signin_accountList.click();
	}
	
	@When("^enter email as \"([^\"]*)\"$")
	public void enter_email_as(String email) {
		
		waitForElementPresent(loginPage.emailField);
		loginPage.emailField.sendKeys(email);
	}
	
	@And("^click on continue button$")
	public void click_on_continue_button() {
		
		if (isElementDisplayed(loginPage.continue_button)) {
			loginPage.continue_button.click();
		}
	}
	
	@And("^enter password as \"([^\"]*)\"$")
	public void enter_password_as(String password) {
		
		if (isElementDisplayed(loginPage.continue_button)) {
			loginPage.continue_button.click();
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(password);
		} else {
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(password);
		}
	}
	
	@And("^click on sign in button$")
	public void click_on_sign_in_button() {
		
		loginPage.signInSubmit.click();
	}
	
	@Then("^verify the error message as \"([^\"]*)\"$")
	public void verify_the_error_message_as(String msg) {
		
		waitForElementPresent(loginPage.loginError);
		Assert.assertEquals(msg, loginPage.loginError.getText());
	}
	
	@Then("^verify the loggedin user name on top right \"([^\"]*)\"$")
	public void verify_the_loggedin_user_name_on_top_right(String userName) {
		
		waitForElementPresent(homeAndCartPage.loggedin_user_name);
		Assert.assertEquals(userName, homeAndCartPage.loggedin_user_name.getText());
	}
	
	@Given("^login with valid user$")
	public void login_with_valid_user() {
		
		waitForElementPresent(loginPage.signin_accountList);
		loginPage.signin_accountList.click();
		waitForElementPresent(loginPage.emailField);
		loginPage.emailField.sendKeys(testData.getValue("user_email"));
		if (isElementDisplayed(loginPage.continue_button)) {
			loginPage.continue_button.click();
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(testData.getValue("user_password"));
		} else {
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(testData.getValue("user_password"));
		}
		loginPage.signInSubmit.click();
		waitForElementPresent(homeAndCartPage.loggedin_user_name);
	}
	
	@When("^search a product$")
	public void search_a_product() {
		
		waitForElementPresent(homeAndCartPage.searchtextbox);
		homeAndCartPage.searchtextbox.sendKeys(testData.getValue("search_product_name"));
		homeAndCartPage.search_submit.click();
	}
	
	@And("^click on first search result$")
	public void click_on_first_search_result() {
		
		waitForElementPresent(homeAndCartPage.search_result_0);
		homeAndCartPage.search_result_0.click();
	}
	
	@And("^capture product name and price$")
	public void capture_product_name_and_price() {
		
		waitForElementPresent(homeAndCartPage.productTitle);
		productTitle = homeAndCartPage.productTitle.getText();
		productPrice = homeAndCartPage.productPrice.getText();
	}
	
	@And("^add product to the cart$")
	public void add_product_to_the_cart() {
		
		homeAndCartPage.addToCartButton.click();
	}
	
	@Then("^verify product added to cart msg as \"([^\"]*)\"$")
	public void verify_product_added_to_cart_msg_as(String msg) {
		
		waitForElementPresent(homeAndCartPage.cartAddedSuccessMsg);
		Assert.assertEquals(msg, homeAndCartPage.cartAddedSuccessMsg.getText());
	}
	
	@Then("^go to cart page and verify product name and price$")
	public void go_to_cart_page_and_verify_product_name_and_price() {
		
		waitForElementPresent(homeAndCartPage.nav_cart);
		homeAndCartPage.nav_cart.click();
		Assert.assertEquals(productTitle, homeAndCartPage.productTitle_on_cart_page.getText());
		Assert.assertEquals(productPrice, homeAndCartPage.productPrice_on_cart_page.getText());
	}
	
	@And("^click to signout and signin again$")
	public void click_to_signout_link() {
		
		waitForElementPresent(loginPage.signin_accountList);
		mouseHoverToElement(loginPage.signin_accountList);
		homeAndCartPage.signout.click();
		waitForElementPresent(loginPage.emailField);
		loginPage.emailField.sendKeys(testData.getValue("user_email"));
		if (isElementDisplayed(loginPage.continue_button)) {
			loginPage.continue_button.click();
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(testData.getValue("user_password"));
		} else {
			waitForElementPresent(loginPage.passwordField);
			loginPage.passwordField.sendKeys(testData.getValue("user_password"));
		}
		loginPage.signInSubmit.click();
		waitForElementPresent(homeAndCartPage.loggedin_user_name);
	}
	
	@After
	public void closeBrowser() {
		
		webDriver.quit();
	}
	
    public WebElement waitForElementPresent(WebElement webElement) {
        try{
        	WebDriverWait wait = new WebDriverWait(webDriver, explicitWaitInSeconds);
        	webElement = wait.until(ExpectedConditions.visibilityOf(webElement));
        	return webElement;
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return null;
    }
    
    public void mouseHoverToElement(WebElement webElement) {
    	Actions actions = new Actions(webDriver);
    	actions.moveToElement(webElement).build().perform();
    }

	public boolean isElementDisplayed(WebElement webElement) {
		
		try {
			webElement.isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}
}