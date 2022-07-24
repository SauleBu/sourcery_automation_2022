
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
    test.describe(version + ': Concatenate', () => {
        test('Concatenating 2 and 3 results in 23', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

            await page.locator('#calculateButton').click();
  
            await expect(page.locator('#numberAnswerField')).toHaveValue('23');

        });

        test('Concatenating -2 and 3 results in -23', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('-23');
        });

        test('Concatenating 1 and 0 results in 0', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1');
            await page.locator('#number2Field').type('0');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('10');
        });

        test('Concatenating a and 3 results in a3', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('a3');
        });

        test('Concatenating 1 and a results in 1a', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('1');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('1a');
        });

        test('Concatenating 2.5 and 3 results in 2.53', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.5');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('2.53');

        });

        test('Concatenating $@ *;, and 3 results in $@ *;,3', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('$@ *;,');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('$@ *;,3');
        });

        test('Concatenating 5 and $@ *; results in 5$@ *;', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('5');
            await page.locator('#number2Field').type('$@ *;');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('5$@ *;');
        });

        test('Concatenating 9999999999 and 9999999999 results in 99999999999999999999', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('9999999999');
            await page.locator('#number2Field').type('9999999999');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('99999999999999999999');
        });

        test('Concatenating 3.00069 and 1 results in 3.000691', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('3.00069');
            await page.locator('#number2Field').type('1');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
        
            await expect(page.locator('#numberAnswerField')).toHaveValue('3.000691');

        });

        test('Concatenating 20 000 and 7 results in 20 0007', async ({ page }) => {
            await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('20 000');
            await page.locator('#number2Field').type('7');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();

            await expect(page.locator('#numberAnswerField')).toHaveValue('20 0007');
        });
  });
});
