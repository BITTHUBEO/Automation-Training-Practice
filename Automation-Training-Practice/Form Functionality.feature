


Feature: Form Functionality

  Background:
    Given I am on the form page

@mytag
  Scenario: Hovering over the "Submit" button highlights it
    When I hover over the "Log In" buttonbutton
    Then the "Submit" button should be highlighted

@mytag
  Scenario: Verify Copy functionality on form fields
    When I right-click on the First name field
    And I right-click on the Last name field
    And I right-click on the Age field
    And I right-click on the Notes field
    Then I should be able to use the Copy feature for each field

@mytag
  Scenario: Check Paste functionality for form fields
    When I right-click on the First name field
    And I right-click on the Last name field
    And I right-click on the Age field
    And I right-click on the Notes field
    Then I should be able to use the Paste feature for each field
                                                                           
@mytag
  Scenario Outline: Check validation messages for incomplete form submissions
    When I submit the form with incomplete information in <First name>, <Last name> or <Age>:
    Then I should see the message <Message> in the first empty field
    Examples:
      | First name | Last name | Age | Message                      |
      |            | Nguyenn   | 25  | "Please fill out this field" |   
      |     Thu    |           | 25  |  Submit successfully         |   
      |     Thu    | Nguyenn   |     | "Please fill out this field" |   
  
@mytag
  Scenario Outline: Check validation messages for incomplete form submissions
    When I submit the form with incomplete information in <First name>, <Last name> oror <Age>:
    Then Then the form should be submitted successfully
    Examples:
      | First name | Last name | Age | 
      |     Thu    |           | 25  |  

@mytag
  Scenario Outline: Check form submission with valid inputs
    When I submit the form with valid information:
      | First name | Last name | Age | Notes |
      | Thu        | Nguyenn   | 25  | Some notes |
    Then the form should be submitted successfully

@mytag
  Scenario Outline: Check form submission with invalid inputs
    When I submit the form with ininvalid information:
      | First name | Last name | Age | Notes |
      | Thu@       | Nguyenn   | 25  | Some notes |
      | Thu        | Nguyenn@  | 25  | Some notes |
    Then the form should not be submitted successfully
    And I should see the message "Special characters are not allowed"

@mytag
  Scenario Outline: Check form submission with invalid inputs
    When I submit the form with invinvalid information:
      | First name | Last name | Age | Notes |
      | Thu123     | Nguyenn   | 25  | Some notes |
      | Thu        | Nguyen123 | 25  | Some notes |      
    Then the form should not be submitted successfully
    And I should see the message "numeric characters are not allowed."

@mytag
  Scenario Outline: Check form submission with excessively long inputs
    When I submit the form with excessively long information:
      | First name                       | Last name                          | Age | Notes |
      | ThisIsAnExcessivelyLongFirstName |  Nguyenn                           | 25  | Some notes |
      | Thu                              |  ThisIsAnExcessivelyLongFirstName  | 25  | Some notes |
    Then the form should be submitted successfully

@mytag
  Scenario Outline: Check form submission with too short inputs
    When I submit the form with too short information:
      | First name | Last name | Age | Notes |
      | A          | Nguyennn  | 25  | Some notes |
      | Le         | Nguyenn   | 25  | Some notes |     
    Then the form should not be submitted successfully
    And I should see the message "Firstname provided is too short"

@mytag
  Scenario Outline: Check form submission with only whitespace inputs
    When I submit the form with only whitespace inputs:
      | First name | Last name | Age | Notes |
      |            | Nguyennn  | 25  | Some notes |    
    Then the form should not be submitted successfully
    And I should see the message "first name field cannot be empty"

@mytag
  Scenario Outline: Check form submission with accented characters
    When I submit the form with accented characters in the name field
      | First name | Last name | Age | Notes |
      |   Thư      | Nguyennn  | 25  | Some notes |           
    Then the form should be submitted successfully

@mytag
  Scenario: Check form submission with multi-word name
    When I submit the form with a multi-word name
      | First name | Last name   | Age | Notes      |
      | Bich Thu   |             | 25  | Some notes |
      | Thu        | Smith David | 25  | Some notes |
    Then the form should be submitted successfully

@mytag
  Scenario: Check form submission with multi-word accented characters name
    When I submit the form with a multi-word name
      | First name | Last name | Age | Notes |
      |   Bích Thư |           | 25  | Some notes |
    Then the form should be submitted successfully

@mytag
  Scenario: Check form submission with initials
    Given I am on the form page
    When I submit the form with initials
    Then the form should be submitted successfully

@mytag
  Scenario: Submit form successfully with valid last name
    Given I am on the form page
    When I enter a valid last name into the last name field
    And I click the 'Submit' button
    Then the form should be submitted successfully

@mytag
  Scenario Outline: Verify error message for too short last name
    Given I am on the form page
    When I enter "<LastName>" into the last name field
    And I click the 'Submit' button
    Then an error message should be displayed indicating that the last name provided is too short
    Examples:
      | LastName |
      | A        |


@mytag
  Scenario Outline: Check form submission with only whitespace inputs
    When I submit the form with only whitespace inputs:
      | First name | Last name | Age | Notes |
      |     Thu    |           | 25  | Some notes |    
    Then the form should not be submitted successfully
    And I should see the message "Last name field cannot be empty"