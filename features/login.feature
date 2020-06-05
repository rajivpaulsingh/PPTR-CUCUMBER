Feature: Login

    As a user
    I can login to the application

    Scenario: User can login to application
        Given I open the login page
        When I fill the login form
        And I click on submit button
        Then I expect to see the application content