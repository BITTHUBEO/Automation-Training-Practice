const { I } = inject();


Given('The progress bar website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/progressbar');
    I.wait(30);
});
When('I click the Start button', () => {
    I.click('#startButton')
    
});
Then('I wait for the progress bar to reach 75%', async() => {
    let width = 0;
    while (width < 75) {
        let progress = await I.grabAttributeFrom('#progressBar', 'aria-valuenow');
        width = parseInt (progress)
    }
   I.click('#stopButton');
    
});
pause(30)

  