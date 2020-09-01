/**
* 回调函数封装为promise
* @function promisefy
* @param {function} -e.g promisefy((string1, string2, success, fail)=>{})
* @return {function}
*/
export default (fn = (...arg) => {
  arg[arg.length - 1]('promisefy`s param format is wrong');
}) => (...[
  objStr = '',
  keyStr = '',
  params = {},
]) => new Promise((resolve, reject) => {
  fn.call(this,
    objStr,
    keyStr,
    params,
    (res = '') => {
      resolve(res);
    },
    (err) => {
      reject(err);
      console.log(err);
    });
});
