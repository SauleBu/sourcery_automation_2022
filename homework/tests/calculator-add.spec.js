
const { test, expect } = require('@playwright/test');

const calculatorInputsFiller = require('./calculatorInputsFiller');

const data = [
    'Prototype',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];

test.setTimeout(120000);

data.forEach(version => {
    test.describe(version + ': Add', () => {
        test('Adding 2 and 3 results in 5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '2', '3');
            await page.locator('#calculateButton').click();

            await expect(page.locator('#numberAnswerField')).toHaveValue('5');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });

        test('Adding -2 and 3 results in 1', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '-2', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });

        test('Adding 0 and 0 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '0', '0');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Adding a and 3 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', 'a', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Adding 1 and a results in error: Number 2 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '1', 'a');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Adding 2.5 and 3 results in 5.5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '2.5', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('5.5');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });

        test('Adding 3.00069 and 1 results in 4.00069', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '3.00069', '1');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('4.00069');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('4');
        });

        test('Adding 20 000 and 7 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Add', '20 000', '7');
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});
