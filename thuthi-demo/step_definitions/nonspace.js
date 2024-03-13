const { I } = inject();

Given('The non-space website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/nbsp');
});

When('I search for the button with text My Button using XPath', () => {
    I.seeElement(`//button[text()='My\xA0Button']`);
}); 
Then('The button is found successfully', () => {

});

