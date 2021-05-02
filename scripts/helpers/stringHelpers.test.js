import { makeUppercase, replaceSpaces, limitLength } from './stringHelpers.ts';

test('string to uppercase', () => {
    const myString = 'Hello world!';
    expect(makeUppercase(myString)).toEqual(myString.toUpperCase());
});