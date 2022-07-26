
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
]

test.setTimeout(120000);

data.forEach(version => {
    test.describe(version + ': Multiply', () => {
        test('Multiplying 2 and 3 results in 6', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '2', '3');
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });

        test('Multiplying -2 and 3 results in -6', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '-2', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        });

        test('Multiplying 15 and 0 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '15', '0');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Multiplying a and 3 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', 'a', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Multiplying 1 and a results in error: Number 2 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '1', 'a');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Multiplying 2.5 and 3 results in 7.5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '2.5', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('7.5');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('7');
        });

        test('Multiplying 3.00069 and 2 results in 6.00138', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '3.00069', '2');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('6.00138');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });

        test('Multiplying 20 000 and 7 results in error: Number 1 is not a number', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Multiply', '20 000', '7');
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});