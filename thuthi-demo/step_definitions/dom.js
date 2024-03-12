const { I } = inject();



Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/hiddenlayers');
  });
  When('I click on the Generate button', () => {
    I.click('input#buttonGenerate')
  });
  When ('I click on the Copy button',() => {
    I.click('input#buttonCopy')
  })
  Then('The copied GUID should match the value displayed in the input field', () => {
    
  });
  pause(30)

  

  