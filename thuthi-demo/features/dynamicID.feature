Feature: DynamicID

    @TC-DID-01
    Scenario: Verify ID is not used for button identification
        Given The website is open and ready for use
        When Click the Button with dynamic ID button
        Then ID is not used to identify the button
