const { I } = inject();


  Given('The dynamic table website is open and ready for use', () => {
    I.amOnPage('http://uitestingplayground.com/dynamictable');
  });
  When('I open the Task Manager page', () => {
  });
  Then('I compare the CPU load of Chrome with the value in the yellow label', async()=>{
    I.wait(10);
    const chrome = await I.grabTextFrom('//html/body/section/div/div/div[3]/div[2]/span[3]')
    I.wait(10);
    const yellow = await I.grabTextFrom('p.bg-warning')
    if (chrome === yellow) {
        console.log('CPU load values match');
    } else {
        console.log('CPU load values do not match');
    }
    })
  pause(30)

  