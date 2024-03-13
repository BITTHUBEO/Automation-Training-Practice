const { I } = inject();


  Given('The web is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/textinput');
  });
  When('I enter username into the input field', () => {
    I.fillField('input#newButtonName', 'Thu')
  });
  When('I press the button', () => {
    I.click('Button That Should Change it\'s Name Based on Input Value'); 
  });
  Then('The button name changed to Button Name Changed',()=>{
    I.see(`Thu`);
  })

  pause(30)

  