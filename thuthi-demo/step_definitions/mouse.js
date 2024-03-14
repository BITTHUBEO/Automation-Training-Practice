const { I } = inject();


    Given('The mouse over website is open', () => {
        I.amOnPage('http://uitestingplayground.com/mouseover');
    });
    let times = 0;
    When('I click the link 2 times', () => {
        I.click('body > section > div > div:nth-child(7) > a')
        I.click('body > section > div > div:nth-child(7) > a')
    });
    Then('The click count should increase by 2', () => {
        times +=2;
        I.see(times.toString())
    });
    pause(30)

  