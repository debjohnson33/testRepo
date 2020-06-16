// Write function that accepts 2 strings and tells if they are anagrams of each other
// ignore spaces
// ignore case
import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
  it('returns false if there are empty string or strings', () => {
    const expected = false;
    const actual = isAnagram('', '');
    expect(actual)to.equal(expected);
  });

})