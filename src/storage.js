export const getStorage = key => {
  const val = localStorage.getItem(key) || '{}';
  return JSON.parse(val);
};

export const setStorage = (key, val) => {
  return localStorage.setItem(key, JSON.stringify(val));
};

export const clearStorage = () => localStorage.clear()

export default {
  get: getStorage,
  set: setStorage,
  clear: clearStorage,
}