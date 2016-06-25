import React, {Component} from 'react';
import SkyLight from 'react-skylight';


class Bubble extends Component {
	render(){
		return(
          <div className="bubble-sort col-xs-12">
              <h1>Bubble Sort</h1>
              <button onClick={() => this.refs.simpleDialog.show()}>Learn More</button>
              <div className="pop-up">
                  <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Bubble Sort">
                     The Bubble Sort Algorithm is one of the most famous sorting
                     algorithms known to the computer science community and works by 
                     measuring the size of two values and sorting them that way till
                     it has went through all the values in the set.
                  </SkyLight>
              </div>
              <p>
                The Bubble Sort Algorithm is one of the most famous sorting
                algorithms known to the computer science community and works by 
                measuring the size of two values and sorting them that way till
                it has went through all the values in the set.
              </p>

              <div className="bubble-img"><img src={'http://visualgo.net/img/gif/sorting.gif'} alt="boohoo" className="img-responsive"/></div>
          </div>
	    );
	}
}



export default Bubble;