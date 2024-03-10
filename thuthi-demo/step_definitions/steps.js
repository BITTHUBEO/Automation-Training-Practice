const { I } = inject();
// Add in your custom step files

//Scenario Outline: Check validation messages for incomplete form submissions

Given('I am on the form page', () => {
  I.amOnPage('https://testpages.eviltester.com/styled/validation/input-validation.html');
});

When('I submit the form with incomplete information in {string}, {int}', (firstname, age) => {
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


/*When('I submit the form with incomplete information in {string}, {string} or {int}', (firstname, surname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age); 
});
When('I click submit button',() => {
  I.click('input[type="submit"]');
})
Then('I should see the message {string} in the first empty field', (errormessage) => {
  I.see('errormessage');
});
pause(30)

  When('I submit the form with invalid information in {string}, {string}, {int}, {string}', (firstname, surname,age, notes) => {
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
  pause(30)


//  Scenario Outline: Check form submission with invalid inputs
/*Given('I am on the form page', () => {
  I.amOnPage('https://testpages.eviltester.com/styled/validation/input-validation.html');
});*/
//casef03- failed
When('I submit the form with incomplete information in {string}, {string}, {int}, {string}', (firstname, surname, age, notes) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age.toString()); 
  I.fillField('input#notes', notes); 
  I.click('input[type="submit"]');
})
Then ('The form should not be submitted successfully',() => {
  I.dontSee('Input Validation Response')
}) 

Then('I should see the message "Special characters are not allowed"', () => {
  I.see('Special characters are not allowed');
});
pause(10)
//casef04-done
When('I submit the form with excessively long information in {string}, {string}, {int}', (firstname, surname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age.toString()); 
  I.click('input[type="submit"]');
})
Then('The form should be submitted successfully', () => {
  I.see('Input Validation Response');
});
pause(30)

//casef05 done

When('I submit the form with accented characters in the {string}, {string}, {int}', (firstname, surname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age.toString()); 
  I.click('input[type="submit"]');
})
Then('The form should be submitted successfully', () => {
  I.see('Input Validation Response');
});
pause(30)
 
//casef06 fail

When('I submit the form with a multi-word name in {string}, {string}, {int}', (firstname, surname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age.toString()); 
  I.click('input[type="submit"]');
})
Then('The form should be submitted successfully', () => {
  I.see('Input Validation Response');
});
pause(30)

//casef07 
When('I submit the form with a short length in {string}, {string}, {int}', (firstname, surname, age) => {
  I.fillField('input#firstname', firstname);
  I.fillField('input#surname', surname);
  I.fillField('input#age', age.toString()); 
  I.click('input[type="submit"]');
})
Then('An error message should be displayed indicating that the surname provided is too short', () => {
  I.see('Surname provided is too short');
});
pause(30)
