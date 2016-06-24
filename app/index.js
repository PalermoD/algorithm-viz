import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
	render() {
		return <div>Hello Im the first react componet</div>;
	}
}


ReactDOM.render(<App />, document.getElementById('app'));         