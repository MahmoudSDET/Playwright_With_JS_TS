Feature: E2E Testing for Ecommerce Application
		@Regression @E2E
		Scenario Outline: Buy a product
		Given a login to Ecommerce application with "<username>" and "<password>"
		When Add "ADIDAS ORIGINAL" to Cart
		Then Verify "ADIDAS ORIGINAL" is displayed in the Cart
		When Enter valid details and Place the Order
		Then Verify order is present in the OrderHistory

		 Examples:
          | username    	  | 	password  |
          | mahmoud.abdelfattah.sdet@gmail.com| P@ssw0rd  |

       
