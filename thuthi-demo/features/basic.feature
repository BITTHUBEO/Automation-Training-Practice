Feature: Form Functionality

  Background:
    Given I am on the form page
  @case01
  Scenario Outline: Check validation messages for incomplete form submissions
    When I submit the form with incomplete information in "<firstname>" <age>
    When I click submit button
    Then The form should be submitted successfully
    Examples:
      | firstname  | age | 
      |     Thu    | 25  |  
  