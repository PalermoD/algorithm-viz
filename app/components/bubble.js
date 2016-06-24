import React, {Component} from 'react';


class Bubble extends Component {
	render(){
		return(
          <div className="bubble-sort">
              <h1>Bubble Sort</h1>
              <p>
                The Bubble Sort Algorithm is one of the most famous sorting
                algorithms known to the computer science community and works by 
                measuring the size of two values and sorting them that way till
                it has went through all the values in the set.
              </p>

              <div className="bubble-img"><img src={'https://s3.amazonaws.com/algoimages/bubbleSort.jpg'} alt="boohoo" className="img-responsive"/></div>
          </div>
	    );
	}
}



export default Bubble;