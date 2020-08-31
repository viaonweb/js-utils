/**
 * 获取url参数值
 * @param {string} prop
 * @param {string} url
 * @return {String}
 */
export const getUrlParam = (prop, url = window.location.href) => {
  const params = {};
  const search = url.split('?')[1];
  if (!search) return '';
  const query = search.split('#')[0];
  const paramArr = query.split('&');
  paramArr.forEach((str) => {
    const [key, val = ''] = str.split('=');
    params[key] = val;
  });
  return params[prop];
};
