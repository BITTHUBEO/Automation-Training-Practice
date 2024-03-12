Feature: Client side delay

    @TC-delay-01
    Scenario: Verify the test waits for label text to appear after clicking the button and waiting for data.
        Given The website is open and ready for use
        When I press the button and wait for data to appear
        And I click on the text of the loaded label
        Then I verify that the label text has appeared
