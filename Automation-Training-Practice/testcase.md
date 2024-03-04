# Test cases for The input form
- Project name: The input form
- Created by: Thu Thi
- Date of creation: 01/03/2024

 
---------------------------

**Test Case Details:**
- **Test Case ID**: TC-01
- **Description:** Check that the “Submit” button when hovering 
the mouse
- **Preconditions:** N/A
- **Test Input:** N/A


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Hover on the "Log In" button
2. **Expected Result:** 
    - The “Submit” button is highlighted when hovering the mouse
3. **Actual Result:**
    - - The “Submit” button is highlighted when hovering the mouse
4. **Status:** Pass


---------


**Test Case Details:**
- **Test Case ID**: TC-02
- **Description:** Check Copy keyboard, right click works with First name, Last name, Age and Notes field
- **Preconditions:** N/A
- **Test Input:** N/A


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Right-click on the First name, Last name, Age and Notes field
2. **Expected Result:** 
    - Can right click and use Copy feature on the fields 
3. **Actual Result:**
    - Can right click and use Copy feature on the fields
4. **Status:** Pass
-------

**Test Case Details:**
- **Test Case ID**: TC-03
- **Description:** Check Paste keyboard, right click works with First name, Last name, Age and Notes field
- **Preconditions:** N/A
- **Test Input:** N/A


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Right-click on the First name, Last name, Age and Notes field
2. **Expected Result:** 
    - Can right click and use Paste feature on the fields 
3. **Actual Result:**
    - Can right click and use Paste feature on the fields
4. **Status:** Pass

-------

**Test Case Details:**
- **Test Case ID**: TC-04
- **Description:** Check the notification when Last name and Age field is entered, and the Frist name is left empty.
- **Preconditions:** N/A
- **Test Input:** Last name, Age


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Leave the First name field empty.
    - Click the 'Submit' button
2. **Expected Result:** 
    - Display the message "Please fill out this field" in the First name field
3. **Actual Result:**
    - Display the message "Please fill out this field" in the First name field
4. **Status:** Pass

-------

**Test Case Details:**
- **Test Case ID**: TC-05
- **Description:** Check the notification when First name and Age field is entered, and the Last name is left empty.
- **Preconditions:** N/A
- **Test Input:** First name, Age


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Leave the First name field empty.
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    -  User submit successfully
4. **Status:** Pass

----

**Test Case Details:**
- **Test Case ID**: TC-06
- **Description:** Check the notification when First name and Last name field is entered, and the Age is left empty.
- **Preconditions:** N/A
- **Test Input:** First name, Last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Leave the Age field empty.
    - Click the 'Submit' button
2. **Expected Result:** 
    - Display the message "Please fill out this field" in the Age field
3. **Actual Result:**
    - Display the message "Please fill out this field" in the Age field
4. **Status:** Pass


----

**Test Case Details:**
- **Test Case ID**: TC-07
- **Description:** Verify that users can submit successfully when entering First name valid
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter valid First name into the first name field
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully 
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


----

**Test Case Details:**
- **Test Case ID**: TC-08
- **Description:** Verify that users can not submit successfully when entering first name field with special characters
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter invalid First name into the first name field
    - Click the 'Submit' button
2. **Expected Result:** 
    - An error message is displayed indicating that special characters are not allowed.
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail

----

**Test Case Details:**
- **Test Case ID**: TC-09
- **Description:** Verify that users can not submit successfully when entering first name field with numeric input
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter invalid First name into the first name field
    - Click the 'Submit' button
2. **Expected Result:** 
    - An error message is displayed indicating that numeric characters are not allowed in the first name field. 
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail


----

**Test Case Details:**
- **Test Case ID**: TC-10
- **Description:** Verify that users can submit successfully when entering first name field with excessively long input.
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter a name of the maximum allowed length in the name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


----

**Test Case Details:**
- **Test Case ID**: TC-11
- **Description:** Verify that the user can submit successfully when entering a name field with at least 2 characters
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter a name that is 2 characters long in the name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully
3. **Actual Result:**
    - An error message is displayed indicating that "Firstname provided is too short"
4. **Status:** Fail

----

**Test Case Details:**
- **Test Case ID**: TC-12
- **Description:** Verify that users can not submit successfully when entering a name field with only whitespace input
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter only whitespace characters into the first name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    -  An error message is displayed indicating that the first name field cannot be empty.
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail

----


**Test Case Details:**
- **Test Case ID**: TC-13
- **Description:** Verify that the user can submit successfully when entering an accented name into the first name field
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter Accented name
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


-----

**Test Case Details:**
- **Test Case ID**: TC-14
- **Description:** Verify that the user can submit successfully when entering an accented name into the last name field
- **Preconditions:** N/A
- **Test Input:** last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter Accented name
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


-------

**Test Case Details:**
- **Test Case ID**: TC-15
- **Description:** Verify that users can submit successfully when entering a multi-word name
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter multi-word name
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


-------

**Test Case Details:**
- **Test Case ID**: TC-16
- **Description:** Verify that the user can submit successfully when entering the initials
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter the initials
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass



-------

**Test Case Details:**
- **Test Case ID**: TC-17
- **Description:** Verify that users can submit successfully when entering Last name valid
- **Preconditions:** N/A
- **Test Input:** Last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter valid Last name into the last name field
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully 
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass

----

**Test Case Details:**
- **Test Case ID**: TC-18
- **Description:** Verify that users can not submit successfully when entering last name field with special characters
- **Preconditions:** N/A
- **Test Input:** last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter invalid last into the last field
    - Click the 'Submit' button
2. **Expected Result:** 
    - An error message is displayed indicating that special characters are not allowed.
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail

-----
**Test Case Details:**
- **Test Case ID**: TC-19
- **Description:** Verify that users can not submit successfully when entering last name field with numeric input
- **Preconditions:** N/A
- **Test Input:** First name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter invalid last name into the last name field
    - Click the 'Submit' button
2. **Expected Result:** 
    - An error message is displayed indicating that numeric characters are not allowed in the last name field. 
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail

----

**Test Case Details:**
- **Test Case ID**: TC-20
- **Description:** Verify that users can submit successfully when entering last name field with excessively long input.
- **Preconditions:** N/A
- **Test Input:** last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter a name of the maximum allowed length in the last name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass

----

**Test Case Details:**
- **Test Case ID**: TC-21
- **Description:** Verify that the user cannot submit successfully when entering a name field with at least 2 characters
- **Preconditions:** N/A
- **Test Input:** last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter a name that is 3 or more characters long in the last name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    - User submit successfully
3. **Actual Result:**
    - An error message is displayed indicating that "Firstname provided is too short"
4. **Status:** Fail

----

**Test Case Details:**
- **Test Case ID**: TC-22
- **Description:** Verify that users can not submit successfully when entering a last name field with only whitespace input
- **Preconditions:** N/A
- **Test Input:** last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter only whitespace characters into the last name field.
    - Click the 'Submit' button
2. **Expected Result:** 
    -  An error message is displayed indicating that the last name field cannot be empty.
3. **Actual Result:**
    - User submit successfully
4. **Status:** Fail

----


**Test Case Details:**
- **Test Case ID**: TC-23
- **Description:** Verify that users can submit successfully when entering a multi-word name
- **Preconditions:** N/A
- **Test Input:** Last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter multi-word name
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - User submit successfully
4. **Status:** Pass


-----

**Test Case Details:**
- **Test Case ID**: TC-23
- **Description:** Verify that users can submit successfully when entering a multi-word name
- **Preconditions:** N/A
- **Test Input:** Last name


**Test Steps:**

1. **Steps:**
    - Open the form 
    - Enter multi-word name
    - Click the 'Submit' button
2. **Expected Result:** 
    -  User submit successfully
3. **Actual Result:**
    - An error message is displayed indicating that "Surname provided is too short"
4. **Status:** Fail