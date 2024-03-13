Feature: Visibility

    @TC-vis-01
    Scenario: Verify test scrolls the button into a visible area
        Given The website is ready for use
        When I press the Hide button
        Then I determine if other buttons are visible under various conditions