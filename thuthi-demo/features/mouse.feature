Feature: Mouse over

    @TC-mouse-01
    Scenario: verify the behavior of mouse over
        Given The mouse over website is open
        When I click the link 2 times
        Then The click count should increase by 2

