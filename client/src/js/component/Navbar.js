var React = require('react');
var {Link}=require('react-router');
//var NavLink=require('./NavLink');

var Navbar = React.createClass({

    render: function() {
        return (
        <div>
            <div className="container-fluid">
                <div className="navbar navbar-fixed-top navbar-inverse">
                  <div className="container-fluid">
                       <a className="navbar-brand" href="#">WAVE APP</a>
                       <ul className="nav navbar-nav">

                          <li>
                              <Link to="/UserInput" >Wave Form</Link>

                          </li>

                          <li>
                              <a href="#" >LOGIN</a>

                          </li>

                          <li>
                              <a href="#" >LOGOUT</a>

                          </li>

                      </ul>

                   </div>
               </div>
           </div>
       </div>
        );
        }
    });

module.exports=Navbar;
