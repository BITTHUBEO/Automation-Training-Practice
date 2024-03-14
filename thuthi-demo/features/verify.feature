Feature: Verify Text

    @TC-verify-01
    Scenario: Verify text on the page
        Given The verify tex website is open and ready for use
        When I search for an element with text Welcome UserName!
        Then the element should be found
