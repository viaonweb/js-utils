/**
  * 变量类型
  * @param target {any}
  * @return {string} number/string/object/array/null
*/

export default (target) => {
  const type = Object.prototype.toString.call(target);
  return type.match(/\[object (.*?)\]/)[1].toLowerCase();
};