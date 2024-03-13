Feature: Non-space 
    @TC-space-01
    Scenario:  Verify that the button with text 'My Button' can be found using XPath.
        Given The non-space website is open and ready for use
        When I search for the button with text My Button using XPath
        Then The button is found successfully
