const { I } = inject();
const assert = require('assert');


Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/shadowdom');
  });
  When('I click on the Generate button', () => {
    I.click('#buttonGenerate')
    I.wait(5)
  });
  When ('I click on the Copy button',() => {
    I.click('#buttonCopy')
    I.wait(5)
  })
  Then('The copied GUID should match the value displayed in the input field', async () => {
    const clipboardValue = await I.executeScript(async () => {
      if (navigator.clipboard) {
          return navigator.clipboard.readText();
      } else {
          return null;
      }
      });
      const inputFieldValue = await I.grabValueFrom('input#editField');
      assert.strictEqual(clipboardValue, inputFieldValue);
  });
  pause(30)

  

  