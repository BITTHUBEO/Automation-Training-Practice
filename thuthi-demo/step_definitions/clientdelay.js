const { I } = inject();


Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/clientdelay');
  });
  When('I press the button and wait for data to appear', () => {
    I.click('Button Triggering Client Side Logic');
    I.waitForText('Data calculated on the client side.', 15);
  });
  When ('I click on the text of the loaded label',() => {
    I.waitForText('Data calculated on the client side.', 15);
  })
  Then('I verify that the label text has appeared', () => {
    I.see('Data calculated on the client side.');
  });
  pause(30)

  