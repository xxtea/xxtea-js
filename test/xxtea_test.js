describe('XXTEA', function(){
  describe('#encryptToBase64()', function(){
    it('should return encrypt data in base64', function(){
        var str = "Hello World! 你好，中国🇨🇳！";
        var key = "1234567890";
        var encrypt_data = XXTEA.encryptToBase64(str, key);
        assert(encrypt_data == "D4t0rVXUDl3bnWdERhqJmFIanfn/6zAxAY9jD6n9MSMQNoD8TOS4rHHcGuE=");
    });
  });
  describe('#decryptFromBase64()', function(){
    it('should return decrypt data in string', function(){
        var str = "Hello World! 你好，中国🇨🇳！";
        var key = "1234567890";
        var encrypt_data = "D4t0rVXUDl3bnWdERhqJmFIanfn/6zAxAY9jD6n9MSMQNoD8TOS4rHHcGuE=";
        var decrypt_data = XXTEA.decryptFromBase64(encrypt_data, key);
        assert(str === decrypt_data);
    });
  });
});
