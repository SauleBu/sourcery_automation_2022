const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('-3, 4, 7 is not triangle', () => {
    expect(isTriangle(-3, 4, 7)).toBe(false);
});

test('A, 4, 5 is not triangle', () => {
    expect(isTriangle('A', 5, 5)).toBe(false);
});

test('3000000, 4, 5 is not triangle', () => {
    expect(isTriangle(3000000, 4, 5)).toBe(false);
});

test('3.5, 4, 5 is triangle', () => {
    expect(isTriangle(3.5, 4, 5)).toBe(true);
});