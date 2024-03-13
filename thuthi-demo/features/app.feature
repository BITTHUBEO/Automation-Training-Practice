Feature: Sample app

    @TC-app-01
    Scenario: Successfull login use any non-empty user name and `pwd` as password..
        Given Web is open and ready for use
        When I enter valid name into the username field
        And I enter pwd as password
        And I click login button
        Then I login successfully
