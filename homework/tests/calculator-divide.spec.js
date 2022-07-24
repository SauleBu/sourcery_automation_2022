
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
    test.describe(version + ': Divide', () => {
        test('Dividing 6 and 3 results in 2', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('6');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('2');
        });

        test('Dividing -6 and 3 results in -2', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-6');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
        });

        test('Dividing 15 and 0 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('0');
            await page.locator('#number2Field').type('0');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');
        });

        test('Dividing a and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Dividing 1 and a results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Dividing 10.5 and 2 results in 5.25', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('10.5');
            await page.locator('#number2Field').type('2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('5.25');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });

        test('Dividing $@*;, and 3 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('$@*;,');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });

        test('Dividing 5 and $@*; results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('5');
            await page.locator('#number2Field').type('$@*;');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });

        test('Dividing 9999999999 and 9999999999 results in 1', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('9999999999');
            await page.locator('#number2Field').type('9999999999');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });

        test('Dividing 3.00069 and 1 results in 3.00069', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('3.00069');
            await page.locator('#number2Field').type('1');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('3.00069');

            await page.locator('#integerSelect').click();
            await expect(page.locator('#numberAnswerField')).toHaveValue('3');
        });

        test('Dividing 20 000 and 7 results in validation error', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('20 000');
            await page.locator('#number2Field').type('7');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();

            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
  });
});
