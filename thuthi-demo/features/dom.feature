Feature: Shadow DOM

    @TC-dom-01
    Scenario:  Verify the copied GUID match the value displayed in the input field
        Given The website is open and ready for use
        When I click on the Generate button
        And I click on the Copy button
        Then The copied GUID should match the value displayed in the input field
