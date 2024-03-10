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

  When('I enter {int} into the first field calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I choose minus button',() => {
    I.selectOption('function','minus');
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

  When('I enter {int} into the first field calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I choose times button',() => {
    I.selectOption('function','times');
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

  When('I enter {int} into the first field calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I choose divide button',() => {
    I.selectOption('function','divide');
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

//case06
  When('I enter {int} into the first field calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I choose divide button',() => {
    I.selectOption('function','divide');
  })
  When('I enter {int} into the second field calculator', (number2) => {
    I.fillField('input#number2', 0);
  });
  When('I click the Calculate button',() => {
    I.click('input[type="submit"]');
  })
  Then('The calculator should display an error message indicating division by zero is not allowed', () => {
    I.see('ERR');
  });
  pause(30)


  When('I enter a number with a decimal point into the {float} calculator', (number1) => {
    I.fillField('input#number1', number1);
  });
  When('I click on any arithmetic operation button',() => {
    I.selectOption('function','divide');
  })
  When('I enter {float} into the second field calculator', (number2) => {
    I.fillField('input#number2', number2);
  });
  When('I click the Calculate button',() => {
    I.click('input[type="submit"]');
  })
  Then('The answer should be {float}', (answer) => {
    I.see(answer.toString());
  });
  pause(30)