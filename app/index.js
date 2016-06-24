require ("./main.css");
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Bubble from './components/bubble';


class App extends Component {
	render() {
		return (
			<div>
			  <Header />
			  <Bubble />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));         