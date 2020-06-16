// Write function that accepts 2 strings and tells if they are anagrams of each other
// ignore spaces
// ignore case
import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
  it('returns false if there are empty string or strings', () => {
    const expected = false;
    const actual = isAnagram('', '');
    expect(actual).to.equal(expected);
  });

  it('returns true if the strings are anagrams of each other', () => {
    const expected = true;
    const actual = isAnagram('state', 'taste');
    expect(actual).to.equal(expected);
  });

  it('returns true if either or both strings have spaces', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  it('returns true if either or both strings have any capital letters', () => {
    const expected = true;
    const actual = isAnagram('STATE', 'taste');
    expect(actual).to.equal(expected);
  });

})