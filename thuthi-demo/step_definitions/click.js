const { I } = inject();


  Given('The website is open', () => {
    I.amOnPage('http://uitestingplayground.com/click');
  });
  When('I click on the blue button', () => {
    I.click('#badButton')
  });
  Then('The button can be clicked', () => {
    I.wait(1); 
    I.seeCssPropertiesOnElements('#badButton', { 'background-color': "#28A745"});
  });
  pause(30)

  