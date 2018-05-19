package org.visa.amazon.test.pageobject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomeAndCartPage {

	@FindBy(xpath="//span[@class='nav-logo-base nav-sprite']")
	public WebElement homePageHeader;
	
	@FindBy(xpath="//a[@id='nav-link-accountList']/span[1]")
	public WebElement loggedin_user_name;
	
	@FindBy(id="twotabsearchtextbox")
	public WebElement searchtextbox;
	
	@FindBy(xpath="//input[@type='submit']")
	public WebElement search_submit;
	
	@FindBy(xpath="//li[@id='result_0']/div/div/div/div/div/div/a")
	public WebElement search_result_0;
	
	@FindBy(id="productTitle")
	public WebElement productTitle;
	
	@FindBy(id="priceblock_ourprice")
	public WebElement productPrice;
	
	@FindBy(id="add-to-cart-button")
	public WebElement addToCartButton;
	
	@FindBy(xpath="//div[@id='huc-v2-order-row-confirm-text']/h1")
	public WebElement cartAddedSuccessMsg;
	
	@FindBy(id="nav-cart")
	public WebElement nav_cart;
	
	@FindBy(xpath="//*[@id=\"activeCartViewForm\"]/div[2]/div[1]/div[4]/div/div[1]/div/div/div[2]/ul/li[1]/span/a/span")
	//@FindBy(xpath="//div[@class='sc-list-item-content']/div/div[1]/div/div/div[2]/ul/li/span/a/span")
	public WebElement productTitle_on_cart_page;
	
	@FindBy(xpath="//*[@id=\"activeCartViewForm\"]/div[2]/div[1]/div[4]/div/div[2]/p/span")
	//@FindBy(xpath="//div[@class='sc-list-item-content']/div/div[2]/p/span")
	public WebElement productPrice_on_cart_page;
	
	@FindBy(id="nav-item-signout-sa")
	public WebElement signout;
	
}
