
const { test, expect } = require('@playwright/test');

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
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });

        test('Multiplying -2 and 3 results in -6', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        });

        test('Multiplying 15 and 0 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('0');
            await page.locator('#number2Field').type('0');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Multiplying a and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Multiplying 1 and a results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Multiplying 2.5 and 3 results in 7.5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.5');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('7.5');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('7');
        });

        test('Multiplying $@*;, and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('$@*;,');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Multiplying 5 and $@*; results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('5');
            await page.locator('#number2Field').type('$@*;');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Multiplying 9999999999 and 9999999999 results in 99999999980000000000', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('9999999999');
            await page.locator('#number2Field').type('9999999999');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('99999999980000000000');
        });

        test('Multiplying 3.00069 and 2 results in 6.00138', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('3.00069');
            await page.locator('#number2Field').type('2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('6.00138');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });

        test('Multiplying 20 000 and 7 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('20 000');
            await page.locator('#number2Field').type('7');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});