
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
    test.describe(version + ': Subtract', () => {
        test('Subtracting 2 and 3 results in -1', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });

        test('Subtracting -2 and 3 results in -5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
        });

        test('Subtracting 0 and 0 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('0');
            await page.locator('#number2Field').type('0');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Subtracting a and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Subtracting 1 and a results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Subtracting 2.5 and 3 results in -0.5', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.5');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-0.5');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Subtracting $@*;, and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('$@*;,');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Subtracting 5 and $@*; results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('5');
            await page.locator('#number2Field').type('$@*;');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Subtracting 9999999999 and 9999999999 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('9999999999');
            await page.locator('#number2Field').type('9999999999');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });

        test('Subtracting 3.00069 and 1 results in 2.00069', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('3.00069');
            await page.locator('#number2Field').type('1');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('2.00069');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        });

        test('Subtracting 20 000 and 7 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('20 000');
            await page.locator('#number2Field').type('7');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});
