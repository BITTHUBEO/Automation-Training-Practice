Feature: Form Functionality

  Background:
    Given I am on the form page
  @casef01
  Scenario Outline: Check validation messages for incomplete form submissions
    When I submit the form with incomplete information in "<firstname>" <age>
    When I click submit button
    Then The form should be submitted successfully
    Examples:
      | firstname  | age | 
      |     Thu    | 25  |  
  


  @casef03
  Scenario Outline: Check form submission with invalid inputs
    When I submit the form with invalid information in "<firstname>", "<surname>", <age>, "<notes>":
    Then The form should not be submitted successfully 
    And I should see the message "Special characters are not allowed"
    Examples:
      | firstname  | surname   | age | notes |
      | Thu@       | Nguyenn   | 25  | Some notes |
      | Thu        | Nguyenn@  | 25  | Some notes |


  @casef04
  Scenario Outline: Check form submission with excessively long inputs
    When I submit the form with excessively long information in '<firstname>', '<surname>', <age>
    Then The form should be submitted successfully
    Examples:
      | firstname                        | surname                            | age |
      | ThisIsAnExcessivelyLongFirstName |  Nguyenn                           | 20  |
      | Thu                              |  ThisIsAnExcessivelyLongFirstName  | 20  |

  @casef05
  Scenario Outline: Check form submission with accented characters
    When I submit the form with accented characters in the '<firstname>', '<surname>', <age>      
    Then The form should be submitted successfully
    Examples:
      | firstname | surname | age |
      |   Thư     | Trần    | 20  |

  @casef06
  Scenario Outline: Check form submission with multi-word name
    When I submit the form with a multi-word name in '<firstname>', '<surname>',<age>
    Then The form should be submitted successfully
    Examples:
      | firstname  | surname     | age |  
      | Bich Thu   |             | 25  | 
      | Thu        | Smith David | 25  |
      | Bich Thu   | Smith David | 25  | 

  @casef07
  Scenario Outline: Verify error message for too short last name
    When I submit the form with a short length in '<firstname>', '<surname>',<age>
    Then An error message should be displayed indicating that the surname provided is too short
    Examples:
      | firstname  | surname     | age |  
      | Bich Thu   | T           | 25  | 