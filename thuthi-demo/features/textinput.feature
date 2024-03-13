Feature: Text input

    @TC-text-01
    Scenario:  Verify the button name changed to "Button Name Changed"
        Given The web is open and ready for use
        When I enter username into the input field
        And I press the button
        Then The button name changed to Button Name Changed