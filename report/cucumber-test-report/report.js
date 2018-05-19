$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchProductAndAddToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Login to amazon site search product and to cart and validate product is added",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4505848220,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "After browser opne and go to amazon website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to amazon website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductAndAddToCart.navigate_to_amazon_website()"
});
formatter.result({
  "duration": 12113380481,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify page title and logo text",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;verify-page-title-and-logo-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "verify page title as \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify logo text on home page as \"Amazon\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more",
      "offset": 22
    }
  ],
  "location": "SearchProductAndAddToCart.verify_page_title_as(String)"
});
formatter.result({
  "duration": 76996538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon",
      "offset": 34
    }
  ],
  "location": "SearchProductAndAddToCart.verify_logo_text_on_home_page_as(String)"
});
formatter.result({
  "duration": 184591082,
  "status": "passed"
});
formatter.after({
  "duration": 939050784,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login with invalid email and validate the error",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-email-and-validate-the-error",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify the error message as \"\u003cerrormsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-email-and-validate-the-error;",
  "rows": [
    {
      "cells": [
        "email",
        "errormsg"
      ],
      "line": 19,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-email-and-validate-the-error;;1"
    },
    {
      "cells": [
        "invalid@test.com",
        "We cannot find an account with that email address"
      ],
      "line": 20,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-email-and-validate-the-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2948984662,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "After browser opne and go to amazon website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to amazon website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductAndAddToCart.navigate_to_amazon_website()"
});
formatter.result({
  "duration": 13593306283,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login with invalid email and validate the error",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-email-and-validate-the-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter email as \"invalid@test.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "verify the error message as \"We cannot find an account with that email address\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_to_sign_in_link()"
});
formatter.result({
  "duration": 10242171933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid@test.com",
      "offset": 16
    }
  ],
  "location": "SearchProductAndAddToCart.enter_email_as(String)"
});
formatter.result({
  "duration": 799831395,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_on_continue_button()"
});
formatter.result({
  "duration": 1596032234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We cannot find an account with that email address",
      "offset": 29
    }
  ],
  "location": "SearchProductAndAddToCart.verify_the_error_message_as(String)"
});
formatter.result({
  "duration": 516219705,
  "status": "passed"
});
formatter.after({
  "duration": 998564013,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Login with invalid password and validate the error",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-password-and-validate-the-error",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "enter email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the error message as \"\u003cerrormsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-password-and-validate-the-error;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errormsg"
      ],
      "line": 31,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-password-and-validate-the-error;;1"
    },
    {
      "cells": [
        "abhi.mca22@gmail.com",
        "invalid",
        "Your password is incorrect"
      ],
      "line": 32,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-password-and-validate-the-error;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3044418101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "After browser opne and go to amazon website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to amazon website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductAndAddToCart.navigate_to_amazon_website()"
});
formatter.result({
  "duration": 11898787156,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Login with invalid password and validate the error",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-invalid-password-and-validate-the-error;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "enter email as \"abhi.mca22@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "enter password as \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "verify the error message as \"Your password is incorrect\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_to_sign_in_link()"
});
formatter.result({
  "duration": 2520110121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhi.mca22@gmail.com",
      "offset": 16
    }
  ],
  "location": "SearchProductAndAddToCart.enter_email_as(String)"
});
formatter.result({
  "duration": 1179368250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 19
    }
  ],
  "location": "SearchProductAndAddToCart.enter_password_as(String)"
});
formatter.result({
  "duration": 2327987336,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_on_sign_in_button()"
});
formatter.result({
  "duration": 2141360772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is incorrect",
      "offset": 29
    }
  ],
  "location": "SearchProductAndAddToCart.verify_the_error_message_as(String)"
});
formatter.result({
  "duration": 210129075,
  "status": "passed"
});
formatter.after({
  "duration": 936282379,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Login with valid credential and validate the name on home page",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-credential-and-validate-the-name-on-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "enter email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "verify the loggedin user name on top right \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "verify page title as \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-credential-and-validate-the-name-on-home-page;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ],
      "line": 44,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-credential-and-validate-the-name-on-home-page;;1"
    },
    {
      "cells": [
        "abhi.mca22@gmail.com",
        "test123",
        "Hello, Abhishek"
      ],
      "line": 45,
      "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-credential-and-validate-the-name-on-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3287821680,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "After browser opne and go to amazon website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to amazon website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductAndAddToCart.navigate_to_amazon_website()"
});
formatter.result({
  "duration": 23694284929,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Login with valid credential and validate the name on home page",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-credential-and-validate-the-name-on-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "click to sign in link",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "enter email as \"abhi.mca22@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "enter password as \"test123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "verify the loggedin user name on top right \"Hello, Abhishek\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "verify page title as \"Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_to_sign_in_link()"
});
formatter.result({
  "duration": 3156839857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhi.mca22@gmail.com",
      "offset": 16
    }
  ],
  "location": "SearchProductAndAddToCart.enter_email_as(String)"
});
formatter.result({
  "duration": 1436944155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 19
    }
  ],
  "location": "SearchProductAndAddToCart.enter_password_as(String)"
});
formatter.result({
  "duration": 2236132202,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_on_sign_in_button()"
});
formatter.result({
  "duration": 11066796736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello, Abhishek",
      "offset": 44
    }
  ],
  "location": "SearchProductAndAddToCart.verify_the_loggedin_user_name_on_top_right(String)"
});
formatter.result({
  "duration": 264384483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs \u0026 more",
      "offset": 22
    }
  ],
  "location": "SearchProductAndAddToCart.verify_page_title_as(String)"
});
formatter.result({
  "duration": 58554505,
  "status": "passed"
});
formatter.after({
  "duration": 1083353045,
  "status": "passed"
});
formatter.before({
  "duration": 3141605236,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "After browser opne and go to amazon website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to amazon website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchProductAndAddToCart.navigate_to_amazon_website()"
});
formatter.result({
  "duration": 23357323372,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Login with valid user \u0026 add a product to cart \u0026 verify product added in cart \u0026 logout and login again and verify product is still added to cart",
  "description": "",
  "id": "login-to-amazon-site-search-product-and-to-cart-and-validate-product-is-added;login-with-valid-user-\u0026-add-a-product-to-cart-\u0026-verify-product-added-in-cart-\u0026-logout-and-login-again-and-verify-product-is-still-added-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "login with valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "search a product",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "click on first search result",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "capture product name and price",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "add product to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "verify product added to cart msg as \"Added to Cart\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "go to cart page and verify product name and price",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "click to signout and signin again",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "go to cart page and verify product name and price",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchProductAndAddToCart.login_with_valid_user()"
});
formatter.result({
  "duration": 14614191548,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.search_a_product()"
});
formatter.result({
  "duration": 13457895201,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_on_first_search_result()"
});
formatter.result({
  "duration": 6803567388,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.capture_product_name_and_price()"
});
formatter.result({
  "duration": 343727213,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.add_product_to_the_cart()"
});
formatter.result({
  "duration": 8135947129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 37
    }
  ],
  "location": "SearchProductAndAddToCart.verify_product_added_to_cart_msg_as(String)"
});
formatter.result({
  "duration": 346448031,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.go_to_cart_page_and_verify_product_name_and_price()"
});
formatter.result({
  "duration": 5590670375,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.click_to_signout_link()"
});
formatter.result({
  "duration": 10428495717,
  "status": "passed"
});
formatter.match({
  "location": "SearchProductAndAddToCart.go_to_cart_page_and_verify_product_name_and_price()"
});
formatter.result({
  "duration": 3532127533,
  "status": "passed"
});
formatter.after({
  "duration": 1077003069,
  "status": "passed"
});
});