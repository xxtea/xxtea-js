# XXTEA for JavaScript

<a href="https://github.com/xxtea/">
    <img src="https://avatars1.githubusercontent.com/u/6683159?v=3&s=86" alt="XXTEA logo" title="XXTEA" align="right" />
</a>

[![Build Status](https://travis-ci.org/xxtea/xxtea-js.svg?branch=master)](https://travis-ci.org/xxtea/xxtea-js)
[![Gitter](https://badges.gitter.im/xxtea/xxtea-js.svg)](https://gitter.im/xxtea/xxtea-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
[![bower version](https://img.shields.io/bower/v/xxtea-js.svg)](http://bower.io/search/?q=xxtea-js)
[![GitHub release](https://img.shields.io/github/release/xxtea/xxtea-js.svg)](https://github.com/xxtea/xxtea-js/releases)
[![License](https://img.shields.io/github/license/xxtea/xxtea-js.svg)](http://opensource.org/licenses/MIT)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/xxtea-js.svg)](https://saucelabs.com/u/xxtea-js)

## Introduction

XXTEA is a fast and secure encryption algorithm. This is a XXTEA library for JavaScript.

It is different from the original XXTEA encryption algorithm. It encrypts and decrypts String instead of uint32 Array, and the key is also String.

## Usage

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
