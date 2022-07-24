// // @ts-check
// const { test, expect } = require('@playwright/test');

// const data = [
//   'Prototype',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9'
// ]


// data.forEach(version => {
//   test.describe(version + ': Add', () => {
//     test('Concatenating 2 and 3 results in 23', async ({ page }) => {
//       await page.goto('https://testsheepnz.github.io/BasicCalculator');
//       await page.selectOption('#selectBuild', { label: version});
//       await page.locator('#number1Field').type('2');
//       await page.locator('#number2Field').type('3');
//       await page.selectOption('#selectOperationDropdown', {label: 'Add'});
//       await page.locator('#calculateButton').click();
  
//       await expect(page.locator('#numberAnswerField')).toHaveValue('5');
//     });
//   });
// });