Feature: Progress Bar

    @TC-bar-01
    Scenario: Verify Progress Bar Reaches 75%
        Given The progress bar website is open and ready for use
        When I click the Start button
        Then I wait for the progress bar to reach 75%

