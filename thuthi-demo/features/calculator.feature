Feature: Calculator


    @case02
    Scenario Outline: Verify addition functionality of the calculator
        Given Calculator application is open and ready for use
        When I enter <first_number> into the first field calculator
        And I choose plus button
        And I enter <second_number> into the second field calculator
        And I click the Calculate button
        Then The answer should be <expected_result>

        Examples:
            | first_number | second_number | expected_result |
            | 5            | 7             |      12         |  

