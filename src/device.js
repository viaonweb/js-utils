const UA = window.navigator.userAgent.toLowerCase();
const matchVersion = UA.match(/AliApp\(LT\/([\d.]+)\)/i) || ['', '0.0.0'];
export const isAndroid = /android/i.test(UA);
export const isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(UA);
export const isTJ = /AliApp\(LT/i.test(UA);
export const isTM = /AliApp\(TM/i.test(UA);
export const isTB = /AliApp\(TB/i.test(UA);
export const isAP = /AliApp\(AP/i.test(UA);
export const isIPhoneX = isIos && (screen.height === 812 && screen.width === 375 || screen.height === 896 && screen.width === 414);
export const version = matchVersion[1];

export default {
  isAndroid,
  isIos,
  isIPhoneX,
  isTJ,
  isTM,
  isTB,
  isAP,
  version,
};
