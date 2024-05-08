// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('Expect 1234567890 to be false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('Expect 456 9890 to be false', () => {
  expect(isPhoneNumber('456 9890')).toBe(false);
});
test('Expect 123-456-7890 to be true', () => {
   expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('Expect (123) 457-9890 to be false', () => {
  expect(isPhoneNumber('(123) 457-9890')).toBe(true);
});

//isEmail
test('Expect tgwld@google to be false', () => {
  expect(isEmail('tgwld@google')).toBe(false);
});
test('Expect tgwld@googlecom to be false', () => {
  expect(isEmail('tgwld@googlecom')).toBe(false);
});
test('Expect tgwld@google.com to be true', () => {
  expect(isEmail('tgwld@google.com')).toBe(true);
});
test('Expect tgwld@montebello.k12.ca.us to be true', () => {
  expect(isEmail('tgwld_304@gmail.com')).toBe(true);
});

//The password's first character must be a letter, it must
//contain at least * 4 characters and no more than 15 characters
//and no characters other than * * letters, numbers and the
//underscore may be used

//isStrongPassword
test('Expect 1212 to be false', () => {
  expect(isStrongPassword('1212')).toBe(false);
});
test('Expect a_3542* to be false', () => {
  expect(isStrongPassword('a_3542*')).toBe(false);
});
test('Expect Y_78 to be true', () => {
  expect(isStrongPassword('Y_78')).toBe(true);
});
test('Expect a987___ndawwd to be true', () => {
  expect(isStrongPassword('a987___ndawwd')).toBe(true);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.

//isDate
test('Expect 122030300 to be false', () => {
  expect(isDate('122030300')).toBe(false);
});
test('Expect /20/2004 to be false', () => {
  expect(isDate('/20/2004')).toBe(false);
});
test('Expect 10/20/2004 to be true', () => {
  expect(isDate('10/20/2004')).toBe(true);
});
test('Expect 1/2/2004 to be true', () => {
  expect(isDate('1/2/2004')).toBe(true);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.

//isHexColor
test('Expect #ZZF to be false', () => {
  expect(isHexColor('#ZZF')).toBe(false);
});
test('Expect #ZZFF to be false', () => {
  expect(isHexColor('#ZZFF')).toBe(false);
});
test('Expect #AAA to be true', () => {
  expect(isHexColor('#AAA')).toBe(true);
});
test('Expect #AAAAAA to be true', () => {
  expect(isHexColor('#AAAAAA')).toBe(true);
});



