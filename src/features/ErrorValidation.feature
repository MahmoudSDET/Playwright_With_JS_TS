@Smoke
Feature: Login Error Validation for Ecommerce Application
      
	    @Smoke
		Scenario Outline: Login Error Validation
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  | 	password  |
          | mahmoud.abdelfattah.sdet@gmail.com | P@ssw0rd  |
       
       
