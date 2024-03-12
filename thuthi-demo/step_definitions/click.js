const { I } = inject();


Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/click');
  });
  When('I click on the blue button', () => {
    I.click('Button That Ignores DOM Click Event')
  });
  Then('The button can be clicked', () => {
    I.wait(1); 
    I.seeCssPropertiesOnElements('.btn-success', { 'background-color': '#28A745'});
  });
  pause(30)

  