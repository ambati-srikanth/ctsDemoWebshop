$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/webshop.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Demo Webshop",
  "description": "",
  "id": "testing-demo-webshop",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Registration",
  "description": "",
  "id": "testing-demo-webshop;validate-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "intialize the browser with chrome Driver",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"http://demowebshop.tricentis.com/\" Navigate to Home page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on Register in home page to land on secure Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enters registration details and clicks on Register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify that user is able register or not",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateRegistation.intialize_the_browser_with_chrome_Driver()"
});
formatter.result({
  "duration": 11400535700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 13
    }
  ],
  "location": "ValidateRegistation.user_enters_Navigate_to_Home_page(String)"
});
formatter.result({
  "duration": 4032582900,
  "status": "passed"
});
formatter.match({
  "location": "ValidateRegistation.click_on_Register_in_home_page_to_land_on_secure_Registration_page()"
});
formatter.result({
  "duration": 1000816499,
  "status": "passed"
});
formatter.match({
  "location": "ValidateRegistation.user_enters_registration_details_and_clicks_on_Register()"
});
formatter.result({
  "duration": 3566459300,
  "status": "passed"
});
formatter.match({
  "location": "ValidateRegistation.verify_that_user_is_able_register_or_not()"
});
formatter.result({
  "duration": 519518900,
  "status": "passed"
});
formatter.match({
  "location": "ValidateRegistation.application_should_be_closed()"
});
formatter.result({
  "duration": 78686600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "positive test validating login",
  "description": "",
  "id": "testing-demo-webshop;positive-test-validating-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "intialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enter \"http://demowebshop.tricentis.com/\" navigate to Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on login in home page to land on secure sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e and login",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify that user is successfully login or not",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "testing-demo-webshop;positive-test-validating-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "testing-demo-webshop;positive-test-validating-login;;1"
    },
    {
      "cells": [
        "ambatisrikanth463@gmail.com",
        "ambatisrikanth"
      ],
      "line": 22,
      "id": "testing-demo-webshop;positive-test-validating-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "positive test validating login",
  "description": "",
  "id": "testing-demo-webshop;positive-test-validating-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "intialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enter \"http://demowebshop.tricentis.com/\" navigate to Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click on login in home page to land on secure sign in page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters ambatisrikanth463@gmail.com and ambatisrikanth and login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify that user is successfully login or not",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateLogin.intialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 9501941799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 12
    }
  ],
  "location": "ValidateLogin.user_enter_navigate_to_Home_Page(String)"
});
formatter.result({
  "duration": 3887175400,
  "status": "passed"
});
formatter.match({
  "location": "ValidateLogin.click_on_login_in_home_page_to_land_on_secure_sign_in_page()"
});
formatter.result({
  "duration": 843529800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ambatisrikanth463@gmail.com",
      "offset": 12
    },
    {
      "val": "ambatisrikanth",
      "offset": 44
    }
  ],
  "location": "ValidateLogin.user_enters_and_and_login(String,String)"
});
formatter.result({
  "duration": 1659435500,
  "status": "passed"
});
formatter.match({
  "location": "ValidateLogin.verify_that_user_is_successfully_login_or_not()"
});
formatter.result({
  "duration": 662683401,
  "status": "passed"
});
formatter.match({
  "location": "ValidateLogin.application_should_be_closed()"
});
formatter.result({
  "duration": 100707101,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Text and Validate image",
  "description": "",
  "id": "testing-demo-webshop;validate-text-and-validate-image",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Intialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enter \"http://demowebshop.tricentis.com/\" navigated to home page",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "verify that user is able to see the Feature Products text is present in the home page or not",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "verify that user is able to see the demo webshop image is present in the home page or not",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "application Should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateTextAndImage.intialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 9685952300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 12
    }
  ],
  "location": "ValidateTextAndImage.user_enter_navigated_to_home_page(String)"
});
formatter.result({
  "duration": 3242397600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateTextAndImage.verify_that_user_is_able_to_see_the_Feature_Products_text_is_present_in_the_home_page_or_not()"
});
formatter.result({
  "duration": 93688301,
  "status": "passed"
});
formatter.match({
  "location": "ValidateTextAndImage.verify_that_user_is_able_to_see_the_demo_webshop_image_is_present_in_the_home_page_or_not()"
});
formatter.result({
  "duration": 625298599,
  "status": "passed"
});
formatter.match({
  "location": "ValidateTextAndImage.application_should_be_closed()"
});
formatter.result({
  "duration": 81738100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "validate Book page navigation",
  "description": "",
  "id": "testing-demo-webshop;validate-book-page-navigation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "intialize the browser with chrome driver",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user enters \"http://demowebshop.tricentis.com/\" navigated to home page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user clicks on book link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "verify that user is able to navigated to webshop book page or not",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "application should be Closed",
  "keyword": "Then "
});
formatter.match({
  "location": "BookNavigationPages.intialize_the_browser_with_chrome_driver()"
});
formatter.result({
  "duration": 9731962199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 13
    }
  ],
  "location": "BookNavigationPages.user_enters_something_navigated_to_home_page(String)"
});
formatter.result({
  "duration": 3750057500,
  "status": "passed"
});
formatter.match({
  "location": "BookNavigationPages.user_clicks_on_book_link()"
});
formatter.result({
  "duration": 1064143601,
  "status": "passed"
});
formatter.match({
  "location": "BookNavigationPages.verify_that_user_is_able_to_navigated_to_webshop_book_page_or_not()"
});
formatter.result({
  "duration": 389518900,
  "status": "passed"
});
formatter.match({
  "location": "BookNavigationPages.application_should_be_closed()"
});
formatter.result({
  "duration": 64935499,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "validate sort by filter",
  "description": "",
  "id": "testing-demo-webshop;validate-sort-by-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "intialize The browser with chrome driver",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user Enters \"http://demowebshop.tricentis.com/\" navigated to home page",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user clicks on digital link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "selecting low to high price filter in Sort By drop down",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "veryfy that the displayed products in low to high price or not",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Application Should Be Closed",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateSortByFiletr.intialize_The_browser_with_chrome_driver()"
});
formatter.result({
  "duration": 9453203800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demowebshop.tricentis.com/",
      "offset": 13
    }
  ],
  "location": "ValidateSortByFiletr.user_Enters_navigated_to_home_page(String)"
});
formatter.result({
  "duration": 4205219201,
  "status": "passed"
});
formatter.match({
  "location": "ValidateSortByFiletr.user_clicks_on_digital_link()"
});
formatter.result({
  "duration": 1305431500,
  "status": "passed"
});
formatter.match({
  "location": "ValidateSortByFiletr.selecting_low_to_high_price_filter_in_Sort_By_drop_down()"
});
formatter.result({
  "duration": 1462652400,
  "status": "passed"
});
formatter.match({
  "location": "ValidateSortByFiletr.veryfy_that_the_displayed_products_in_low_to_high_price_or_not()"
});
formatter.result({
  "duration": 154929600,
  "status": "passed"
});
formatter.match({
  "location": "ValidateSortByFiletr.application_Should_Be_Closed()"
});
formatter.result({
  "duration": 141918699,
  "status": "passed"
});
});