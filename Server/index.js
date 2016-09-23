var express=require('express');
var app=express();

app.get('/',function(req,res){
res.send("hello this is from express");
console.log("hello this is from express");
});

app.listen('8080',function(){
  console.log("server running");
});
