Feature: Login to amazon site search product and to cart and validate product is added

Background: After browser opne and go to amazon website
	Given navigate to amazon website

  @Regression
  Scenario: Verify page title and logo text
		Then verify page title as "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
		Then verify logo text on home page as "Amazon"

  @Regression
  Scenario Outline: Login with invalid email and validate the error
  	Given click to sign in link
		When enter email as "<email>"
    And click on continue button
		Then verify the error message as "<errormsg>"
		
	  Examples: 
    | email  | errormsg  |
    | invalid@test.com | We cannot find an account with that email address |
    
  @Regression
  Scenario Outline: Login with invalid password and validate the error
  	Given click to sign in link
		When enter email as "<email>"
    And enter password as "<password>"
    And click on sign in button
		Then verify the error message as "<errormsg>"
		
	  Examples: 
    | email  | password | errormsg  |
    | abhi.mca22@gmail.com | invalid | Your password is incorrect |

	@Regression
  Scenario Outline: Login with valid credential and validate the name on home page
  	Given click to sign in link
		When enter email as "<email>"
    And enter password as "<password>"
    And click on sign in button
		Then verify the loggedin user name on top right "<status>"
		Then verify page title as "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
		
	  Examples: 
    | email  | password | status  |
    | abhi.mca22@gmail.com | test123 | Hello, Abhishek |
    
	@Regression
	Scenario: Login with valid user & add a product to cart & verify product added in cart & logout and login again and verify product is still added to cart
		Given login with valid user
		When search a product
		And click on first search result
		And capture product name and price
		And add product to the cart
		Then verify product added to cart msg as "Added to Cart"
		Then go to cart page and verify product name and price
		And click to signout and signin again
		Then go to cart page and verify product name and price
    