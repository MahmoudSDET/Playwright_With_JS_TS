Feature: Greeting
		@Regression
		Scenario Outline: Say hello
		Given a login to Ecommerce application with "<username>" and "<password>"
		When Add "ADIDAS ORIGINAL" to Cart
		Then Verify "ADIDAS ORIGINAL" is displayed in the Cart
		When Enter valid details and Place the Order
		Then Verify order is present in the OrderHistory

		 Examples:
          | username    	  | 	password  |
          | mahmoud.abdelfattah.sdet@gmail.com| P@ssw0rd  |







		Scenario Outline: Say bye
		Given a login to Ecommerce2 application with "<username>" and "<password>"
		Then Verify Error message is displayed

		 Examples:
          | username    	  | 	password  |
          | anshika@gmail.com | Iamking@000   |
       
       
       
