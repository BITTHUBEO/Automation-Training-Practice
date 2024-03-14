const { I } = inject();


Given('The verify tex website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/verifytext');
});
When('I search for an element with text Welcome UserName!', () => {
    I.seeElement('//div[normalize-space(.)="Welcome UserName!"]');
});
Then('the element should be found', () => {
 
});
pause(30)

  