export const floor = val => {
  val = Math.floor(val);
  return val < 10 ? '0' + val : String(val);
};