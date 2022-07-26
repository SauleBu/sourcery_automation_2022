async function calculatorInputsFiller(page, version, operation, num1Input, num2Input)
{
    await page.selectOption('#selectBuild', { label: version});
    await page.locator('#number1Field').type(num1Input);
    await page.locator('#number2Field').type(num2Input);
    await page.selectOption('#selectOperationDropdown', {label: operation});
}

module.exports = calculatorInputsFiller;