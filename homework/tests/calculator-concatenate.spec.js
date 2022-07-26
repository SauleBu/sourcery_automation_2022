
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
    test.describe(version + ': Concatenate', () => {
        test('Concatenating 2 and 3 results in 23', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '2', '3');
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('23');

        });

        test('Concatenating -2 and 3 results in -23', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '-2', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-23');
        });

        test('Concatenating 1 and 0 results in 10', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '1', '0');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('10');
        });

        test('Concatenating a and 3 results in a3', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', 'a', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('a3');
        });

        test('Concatenating 1 and a results in 1a', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '1', 'a');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('1a');
        });

        test('Concatenating 2.5 and 3 results in 2.53', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '2.5', '3');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('2.53');

        });

        test('Concatenating 3.00069 and 1 results in 3.000691', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '3.00069', '1');
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('3.000691');

        });

        test('Concatenating 20 000 and 7 results in 20 0007', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await calculatorInputsFiller(page, version, 'Concatenate', '20 000', '7');
            await page.locator('#calculateButton').click();

            await expect(page.locator('#numberAnswerField')).toHaveValue('20 0007');
        });
  });
});
