
const { test, expect } = require('@playwright/test');

const calculatorInputsFiller = require('./calculatorInputsFiller');

const data = [
    'Prototype',
    // '1',
    // '2',
    // '3',
    // '4',
    // '5',
    // '6',
    // '7',
    // '8',
    // '9'
];

test.setTimeout(120000);

data.forEach(version => {
    test.describe(version + ': Divide', () => {
        test('Dividing 6 and 3 results in 2', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '6', '3');            
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        });

        test('Dividing -6 and 3 results in -2', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '-6', '3');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
        });

        test('Dividing 15 and 0 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '15', '0');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
        });

        test('Dividing a and 3 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', 'a', '3');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Dividing 1 and a results in error: Number 2 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '1', 'a');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Dividing 10.5 and 2 results in 5.25', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '10.5', '2');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('5.25');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });

        test('Dividing 3.00069 and 1 results in 3.00069', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '3.00069', '1');            
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('3.00069');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('3');
        });

        test('Dividing 20 000 and 7 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Divide', '20 000', '7');            
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});
