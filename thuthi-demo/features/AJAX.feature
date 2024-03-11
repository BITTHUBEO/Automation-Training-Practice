Feature: AJAXdata

    @TC-AJAX-01
    Scenario: Verify the test waits for label text to appear after clicking the button and waiting for data.
        Given The website is open and ready for use
        When Click the Load Data button
        Then I Wait for the label text to appear
