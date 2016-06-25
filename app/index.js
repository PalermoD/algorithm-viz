require ("./main.css");
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Bubble from './components/bubble';
import Binary from './components/binary';
import HashTable from './components/hashtable';
import Example from './components/lightbox';


class App extends Component {
	render() {
		return (
			<div>
			  <Header />
              <div className="algo-row">
			      <Bubble />
			      <Binary />
			      <HashTable />
			      
			   </div>
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));         