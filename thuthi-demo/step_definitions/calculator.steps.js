const { I } = inject();


Given('Calculator application is open and ready for use', () => {
    I.amOnPage('https://testpages.eviltester.com/styled/calculator');
  });
  When('I enter {int} into the first field calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I choose plus button',() => {
    I.selectOption('function','plus');
  })
  When('I enter {int} into the second field calculator', (number2) => {
    I.fillField('input#number2', number2);
  });
  When('I click the Calculate button',() => {
    I.click('input[type="submit"]');
  })
  Then('The answer should be {int}', (answer) => {
    I.see(answer.toString());
  });
  pause(30)
