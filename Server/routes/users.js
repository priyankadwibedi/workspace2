var express = require('express');
var router = express.Router();
var users=require('../model/user');


router.get('/', function(req, res) {
  res.send("<a href='/users'>Show Data</a>");
});

router.post('/userinsert/:userid/:password', function(req, res) {
  var user=new users();
  user.username=req.params.userid;
  user.password=req.params.password;
  user.save(function(error){
    if(error)
    {
      res.send(error);
    }
    else {
      res.send("User Created");
    }

  });

});

router.put('/', function(req, res, next) {
  res.send('this is put');
});

router.delete('/', function(req, res, next) {
  res.send('this is delete');
});

 module.exports=router;
