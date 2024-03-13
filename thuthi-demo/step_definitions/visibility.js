const { I } = inject();


Given('The website is ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/visibility');
  });
  When('I press the Hide button', () => {
    I.click('Hide');
    I.wait(5)
  });
  Then('I determine if other buttons are visible under various conditions', async() => {
    const buttons = ['Zero Width', 'Removed', 'Overlapped', 'Opacity 0', 'Visibility Hidden', 'Display None', 'Offscreen'];
    for (const button of buttons ) {
        if (button !== 'Hide') {
            const width = await I.grabAttributeFrom('button[type="button"]', 'width');
            if (width === '0') {
                I.dontSee(`Button "${button}"`);
            }
        }
    }
});