Feature: Scrollbar

    @TC-scroll-01
    Scenario: Verify test scrolls the button into a visible area
        Given The website is open and ready for use
        When I find the button in the scroll view
        Then I click the button