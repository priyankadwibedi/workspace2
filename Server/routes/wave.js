var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');

var wave=require('../model/wave.js');

router.post("/",function(req,res){
var waves=new wave();
waves.waveName=req.body.waveName;
waves.waveType=req.body.waveType;
waves.location=req.body.location;
waves.NumberOfParticipants=req.body.NumberOfParticipants;
waves.plannedStartDate=req.body.plannedStartDate;
waves.plannedEndDate=req.body.plannedEndDate;
waves.actualStartDate=req.body.actualStartDate;
waves.actualEndDate=req.body.actualEndDate;
waves.ParticipantsMovingOut=req.body.ParticipantsMovingOut;
waves.save(function(error){
  if(error)
  {
    res.send(error);
  }
  else {
    res.send("User Created");
  }

});
});
module.exports=router;
