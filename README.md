# 判断手机机型 
## Install
```shell
npm install mobile-type-test -S
```

## Quick Start
``` javascript
let test = require('mobile-type-test');
let mobleType = test();
// 会输出 mi5 mi8 iphoneX 等等
console.log(mobleType);
```
## 页面直接引入
``` javascript
<script src="./lib/index.min.js"></script>
let mobleType = testMobile();
// 会输出 mi5 mi8 iphoneX 等等
console.log(mobleType);
```
## LICENSE
[MIT](LICENSE)