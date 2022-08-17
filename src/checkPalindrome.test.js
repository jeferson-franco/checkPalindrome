const solution = require('./checkPalindrome.js');

test('test 1', () => {
    expect(solution('aabaa')).toBe(true);
});

test('test 2', () => {
    expect(solution('abac')).toBe(false);
});

test('test 3', () => {
    expect(solution('a')).toBe(true);
});

test('test 4', () => {
    expect(solution('az')).toBe(false);
});

test('test 5', () => {
    expect(solution('abacaba')).toBe(true);
});

test('test 6', () => {
    expect(solution('z')).toBe(true);
});

test('test 7', () => {
    expect(solution('aaabaaaa')).toBe(false);
});

test('test 8', () => {
    expect(solution('zzzazzazz')).toBe(false);
});

test('test 9', () => {
    expect(solution('hlbeeykoqqqqokyeeblh')).toBe(true);
});

test('test 10', () => {
    expect(solution("hlbeeykoqqqokyeeblh")).toBe(true);
});
