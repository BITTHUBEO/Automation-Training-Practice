const { I } = inject();


Given('Website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/hiddenlayers');
  });
  When('I click on the green button', () => {
    I.click('Button')
  });
  Then('The green button cannot be clicked twice', () => {
    I.seeElement('button#blueButton')
  });
  pause(30)

  