const { DataTableArgument } = require('codeceptjs');
const { I } = inject();
let rawHash;
let hashes;
let rows;

Before(() => {
    const dataTableArgument = new DataTableArgument(table);
    const rawHash = dataTableArgument.rowsHash();

  });
Given('I have product with price {int}$ in my cart', (price) => {

});

When('discount for orders greater than $20 is 10%', () => {
    
});

When('I go to checkout', () => {
   
});

Then('I should see overall price is {string} $', (total) => {
 console.log(rawHash)
});
