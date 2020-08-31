##### promisefy
* 回调函数封装为promise
* @function promisefy
* @param {function} -e.g promisefy((string1, string2, success, fail)=>{})
* @return {function}
```javascript
  const bridge = promisefy(window.WindVane && window.WindVane.call);
  bridge('WVPopLayer', 'navToUrl', {
    url: 'url'
  }).then((res) => {
    // ...
  });
```

##### device
```javascript
  device.isAndroid,
  device.isIos,
  device.isIPhoneX,
  device.isTJ,
  device.isTM, 
  device.isTB,
  device.isAP,
```