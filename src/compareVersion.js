/**
 * 版本比较
 * @param {string} version1
 * @param {string} version2
 * @return {Number}
 */
export const compareVersion = (version1, version2) => {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  const length1 = arr1.length;
  const length2 = arr2.length;
  const minlength = Math.min(length1, length2);
  let i = 0;
  for (i; i < minlength; i++) {
    const a = parseInt(arr1[i]);
    const b = parseInt(arr2[i]);
    if (a > b) {
      return 1;
    } if (a < b) {
      return -1;
    }
  }
  if (length1 > length2) {
    for (let j = i; j < length1; j++) {
      if (parseInt(arr1[j]) != 0) {
        return 1;
      }
    }
    return 0;
  } if (length1 < length2) {
    for (let j = i; j < length2; j++) {
      if (parseInt(arr2[j]) != 0) {
        return -1;
      }
    }
    return 0;
  }
  return 0;
};
