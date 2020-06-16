// Write function that accepts 2 strings and tells if they are anagrams of each other
// ignore spaces
// ignore case
export const isAnagram = (str1, str2) => {
  if (str1 === '' || str2 === '') {
    return false;
  }
  let sorted1 = str1.split('').sort().join('').toLowerCase().trim();
  let sorted2 = str2.split('').sort().join('').toLowerCase().trim();
  console.log(sorted1);
  console.log(sorted2);
  if (sorted1 === sorted2) {
    return true;
  }
}