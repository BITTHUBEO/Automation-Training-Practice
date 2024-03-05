Feature: Calculator


@mytag
  Scenario: Verify addition functionality of the calculator
    Given Calculator application is open and ready for use
    When I enter <first_number> into the first field calculator
    And I choose "plus" button
    And I enter <second_number> into the second field calculator
    And I click the "Calculate" button
    Then the answer should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 5            | 7             | 12              |

@mytag
  Scenario: Verify subtraction functionality of the calculator
    Given Calculator application is open and ready for use
    When I enter <first_number> into the first field calculator
    And I choose "minus" button
    And I enter <second_number> into the second field calculator
    And I click the "Calculate" button
    Then the answer should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 10           | 3             | 7               |

@mytag
  Scenario: Verify multiplication functionality of the calculator
    Given Calculator application is open and ready for use
    When I enter <first_number> into the first field calculator
    And I choose "times" button
    And I enter <second_number> into the second field calculator
    And I click the "Calculate" button
    Then the answer should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 4            | 6             | 24              |

@mytag
  Scenario: Verify division functionality of the calculator
    Given Calculator application is open and ready for use
    When I enter <first_number> into the first field calculator
    And I choose "divide" button
    And I enter <second_number> into the second field calculator
    And I click the "Calculate" button
    Then the answer should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 12           | 4             | 3               |

@mytag
  Scenario: Verify division by zero handling
    Given Calculator application is open and ready for use
    When I enter <first_number> into the first field calculator
    And I choose "divide" button
    And I enter "0" into the second field calculator
    And I click the "Calculate" button
    Then the calculator should display an error message indicating division by zero is not allowed

    Examples:
      | first_number |
      | 10           |


@mytag 
  Scenario: Verify decimal point functionality of the calculator
    Given Calculator application is open and ready for use
    When I enter a number with a decimal point into the <first_number> calculator
    And I click on any arithmetic operation button or continue entering numbers
    And I enter <second_number> into the second field calculator
    And I click the "Calculate" button
    Then the answer should be <expected_result>

    Examples:
      | first_number | second_number | expected_result |
      | 10.2         | 5             | 2.04            |
