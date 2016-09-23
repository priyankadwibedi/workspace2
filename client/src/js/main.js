var React=require('react');
var ReactDOM=require('react-dom');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var UserInput=require('./component/UserInput');
var Navbar=require('./component/Navbar');

var MainComponent=React.createClass({
    render:function(){
    return(
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    )
  }
})

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={MainComponent}>
    <IndexRoute component={UserInput}/>
            <Route path="/UserInput" component={UserInput}/>
        </Route>
    </Router>,document.getElementById("app"));
