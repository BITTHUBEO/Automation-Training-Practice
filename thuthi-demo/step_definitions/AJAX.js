const { I } = inject();


Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/ajax');
  });
  When('Click the Load Data button', () => {
    I.click('Button Triggering AJAX Request');
  });
  Then('I Wait for the label text to appear', () => {
    I.waitForText('Data loaded with AJAX get request.', 15);
  });
  pause(30)

  