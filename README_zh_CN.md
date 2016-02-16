# XXTEA 加密算法的 JavaScript 实现

<a href="https://github.com/xxtea/">
    <img src="https://avatars1.githubusercontent.com/u/6683159?v=3&s=86" alt="XXTEA logo" title="XXTEA" align="right" />
</a>

[![Build Status](https://travis-ci.org/xxtea/xxtea-js.svg?branch=master)](https://travis-ci.org/xxtea/xxtea-js)
[![Gitter](https://badges.gitter.im/xxtea/xxtea-js.svg)](https://gitter.im/xxtea/xxtea-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
[![bower version](https://img.shields.io/bower/v/xxtea-js.svg)](http://bower.io/search/?q=xxtea-js)
[![GitHub release](https://img.shields.io/github/release/xxtea/xxtea-js.svg)](https://github.com/xxtea/xxtea-js/releases)
[![License](https://img.shields.io/github/license/xxtea/xxtea-js.svg)](http://opensource.org/licenses/MIT)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/xxtea-js.svg)](https://saucelabs.com/u/xxtea-js)

## 简介

XXTEA 是一个快速安全的加密算法。本项目是 XXTEA 加密算法的 JavaScript 实现。

它不同于原始的 XXTEA 加密算法。它是针对字符串类型数据进行加密的，而不是针对 uint32 数组。同样，密钥也是字符串类型。

## 使用

```html
<!DOCTYPE html>
<html>
    <head>
        <title>XXTEA test</title>
        <meta charset="UTF-8">
        <script src="dist/xxtea.min.js" type="text/javascript"></script>
    </head>
    <body>
        <script type="text/javascript">
            var str = "Hello World! 你好，中国！";
            var key = "1234567890";
            var encrypt_data = XXTEA.encryptToBase64(str, key);
            console.log(encrypt_data);
            var decrypt_data = XXTEA.decryptFromBase64(encrypt_data, key);
            console.assert(str === decrypt_data);
        </script>
    </body>
</html>
```
