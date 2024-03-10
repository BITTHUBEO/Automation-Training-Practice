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

    @case03
    Scenario Outline: Verify subtraction functionality of the calculator
        Given Calculator application is open and ready for use
        When I enter <first_number> into the first field calculator
        And I choose minus button
        And I enter <second_number> into the second field calculator
        And I click the Calculate button
        Then The answer should be <expected_result>

        Examples:
        | first_number | second_number | expected_result |
        | 10           | 3             | 7               |

    @case04
    Scenario Outline: Verify multiplication functionality of the calculator
        Given Calculator application is open and ready for use
        When I enter <first_number> into the first field calculator
        And I choose times button
        And I enter <second_number> into the second field calculator
        And I click the Calculate button
        Then The answer should be <expected_result>

        Examples:
        | first_number | second_number | expected_result |
        | 4            | 6             | 24              |

    @case05
    Scenario Outline: Verify division functionality of the calculator
        Given Calculator application is open and ready for use
        When I enter <first_number> into the first field calculator
        And I choose divide button
        And I enter <second_number> into the second field calculator
        And I click the Calculate button
        Then The answer should be <expected_result>

        Examples:
        | first_number | second_number | expected_result |
        | 12           | 4             | 3               |

    @case06
    Scenario Outline: Verify division by zero handling
        Given Calculator application is open and ready for use
        When I enter <first_number> into the first field calculator
        And I choose divide button
        And I enter 0 into the second field calculator
        And I click the Calculate button
        Then The calculator should display an error message indicating division by zero is not allowed

        Examples:
        | first_number |
        | 10           |

    @case07 
    Scenario Outline: Verify decimal point functionality of the calculator
        Given Calculator application is open and ready for use
        When I enter a number with a decimal point into the <first_number> calculator
        And I click on any arithmetic operation button 
        And I enter <second_number> into the second field calculator
        And I click the Calculate button
        Then The answer should be <expected_result>

        Examples:
        | first_number | second_number | expected_result |
        | 10.2         | 5             | 2.04            |