import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-navbar';


class Header extends Component{
	render(){
		return(
		  <div className="header">
              <h1 className="port-text">Algorithm Notebook</h1>
              <h3 className="port-t">By Palermo Deschamps</h3>
          </div>
		);
	}
}

export default Header;