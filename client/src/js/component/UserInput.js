var React=require('react');
//var Navbar=require('./Navbar');

var UserInput=React.createClass({
  getInitialState:function(){
    return({batch:[],batchName:"",batchType:"",Location:"",Participants:"",plannedStart:"",plannedEnd:"",actualStart:"",actualEnd:"",participantsOut:""})
},
batchName:function(e){
  this.setState({batchName:e.target.value});
},
batchType:function(e){
  this.setState({batchType:e.target.value});
},
Location:function(e){
  this.setState({Location:e.target.value});
},
Participants:function(e){
  this.setState({Participants:e.target.value});
},
plannedStart:function(e){
  this.setState({plannedStart:e.target.value});
},
plannedEnd:function(e){
  this.setState({plannedEnd:e.target.value});
},
actualStart:function(e){
  this.setState({actualStart:e.target.value});
},
actualEnd:function(e){
  this.setState({actualEnd:e.target.value});
},
participantsOut:function(e){
  this.setState({participantsOut:e.target.value});
},
 SaveUser:function(e){
   e.preventDefault();
   batch['batchName']=batchName;
   batch['batchType']=batchType;
   batch['Location']=Location;
   batch['Participants']=Participants;
   batch['plannedStart']=plannedStart;
   batch['plannedEnd']=plannedEnd;
   batch['actualStart']=actualStart;
   batch['actualEnd']=actualEnd;
   batch['participantsOut']=participantsOut;
   $.ajax({
                 url:"http://localhost:8080/wave",
                 dataType: 'json',
                 type: 'POST',
                 cache:false,
                 data:batch,
                 success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                })

 },
 render:function(){
  return(
    <div>
    <form className="form-horizontal">
<div className="form-group">
  <label className="control-label col-sm-2">Batch Name:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.batchName} placeholder="Enter Batch Name"/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Batch Type:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.batchType} placeholder="Enter Batch Type"/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Location:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.Location} placeholder="Location"/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Number of Participants:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.Participants}/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Planned Start Date:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.plannedStart}/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Planned End Date:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.plannedEnd}/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Actual Start Date:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.actualStart}/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Actual End Date:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.actualEnd}/>
  </div>
</div>
<div className="form-group">
  <label className="control-label col-sm-2">Participants Moving out:</label>
  <div className="col-sm-4">
    <input type="text" className="form-control" onChange={this.participantsOut}/>
  </div>
</div>

<div className="form-group">
  <div className="col-sm-offset-2 col-sm-10">
    <button type="submit" className="btn btn-default" onClick={this.SaveUser}>Submit</button>
  </div>
</div>
</form>
    </div>
  )}
})

module.exports=UserInput;
