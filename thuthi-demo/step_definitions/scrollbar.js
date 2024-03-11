const { I } = inject();


Given('The website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/scrollbars');
  });
  When('I find the button in the scroll view', () => {
    const button = document.getElementById("hidingButton");
    button.scrollIntoView();
    I.waitForElement('hidingButton',30)
  });
  Then('I click the button', () => {
    I.click('hidingButton');
  });
  pause(30)

  