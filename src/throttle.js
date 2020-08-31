export const throttle = (fn = () => {}, delay = 80) => {
  let canRun = true;
  return (...arg) => {
    if (!canRun) return false;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arg);
      canRun = true;
    }, delay);
  };
};
