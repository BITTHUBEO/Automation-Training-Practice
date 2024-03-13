const { I } = inject();


Given('Web is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/sampleapp');
  });
  When('I enter valid name into the username field', () => {
    I.fillField('input[name="UserName"]', 'Thu')
  });
  When ('I enter pwd as password',() => {
    I.fillField('input[name="Password"]', 'pwd');
  })
  When ('I click login button',() => {
    I.click('Log In');
  })
  Then('I login successfully', () => {
    const username = 'Thu';
    I.see(`Welcome, ${username}!`);
  });
  pause(30)

  