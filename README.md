## promisefy
* 回调函数封装为promise
* @param {function}
* @return {function}

```javascript
// -e.g promisefy((string1, string2, success, fail) => {})
  const bridge = promisefy(window.WindVane && window.WindVane.call);
  bridge('WVPopLayer', 'navToUrl', {
    url: 'url'
  }).then((res) => {
    // ...
  });
```

## device
* UA
* value {boolean}

```javascript
  device.isAndroid,
  device.isIos,
  device.isIPhoneX,
  device.isTJ,
  device.isTM, 
  device.isTB,
  device.isAP,
```

## compareVersion
* 版本比较
* @param1 {string}
* @param2 {string}
* @return {number}

```javascript
  const isHigh = compareVersion('1.0.1', '1.0.0.0'); // 1
  const isEqual = compareVersion('1.0.0', '1.0.0.0'); // 0
  const isLow = compareVersion('1.0.1', '1.0.2'); // -1
```

## formateRemainTime
* 剩余时间
* @param {string|number}
* @return {object}

## formatTime
* 当前时间
* @param {string|number}
* @return {object}

## get
同lodash get

## getCookie
* 获取cookie
* @param {string}
* @return {string}

## getUrlParam
* 获取url参数
* @param {string}
* @return {string}

## getVariableType
* 获取变量类型
* @param {any}
* @return {string}

```js
  getVariableType(1) // number
  getVariableType('1') // string
```

## storage
* 缓存相关【localStorage】

```js
storage.set('key', {});
storage.get('key');
storage.clear();
```

## throttle
* 节流
* @param1 {function} 回调
* @param2 {number} 延时
* @return {function}