const { I } = inject();
// Add in your custom step files

//Scenario Outline: Check validation messages for incomplete form submissions

Given('I am on the form page', () => {
  I.amOnPage('https://testpages.eviltester.com/styled/validation/input-validation.html');
});

When('I submit the form with incomplete information in {string} {int}', (firstname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#age', age); 
});
When('I click submit button',() => {
  I.click('input[type="submit"]');
})
Then('The form should be submitted successfully', () => {
  I.see('Input Validation Response');
});
pause(30)


//  Scenario Outline: Check form submission with invalid inputs
/*Given('I am on the form page', () => {
  I.amOnPage('https://testpages.eviltester.com/styled/validation/input-validation.html');
});

When('I submit the form with incomplete information in {string} {string} {int} {string}', (firstname, surname, age, notes) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age); 
  I.fillField('input#notes', notes); 
});
When('I click submit button',() => {
  I.click('input[type="submit"]');
})
Then('I should see the message "Special characters are not allowed"', () => {
  I.see('Special characters are not allowed');
});
pause(10)*/