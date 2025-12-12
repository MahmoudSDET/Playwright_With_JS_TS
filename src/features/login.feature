Feature: to validate login functionality
@Login
  Scenario: Successful login with valid credentials
    Given User is on Login Page
    When User enters valid username and password
    And User clicks on the login button
    Then User should be redirected to the Dashboard page