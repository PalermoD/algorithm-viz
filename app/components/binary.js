import React, {Component} from 'react';
import SkyLight from 'react-skylight';


class Binary extends Component {
	render(){
		return(
          <div className="bubble-sort col-xs-12">
              <h1>Binary Search Tree</h1>
              <button onClick={() => this.refs.simpleDialog.show()}>Learn More</button>
              <div className="pop-up">
                  <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Binary Search Tree">
                     In computer science, binary search trees (BST), 
                     sometimes called ordered or sorted binary trees, 
                     are a particular type of containers: data structures 
                     that store "items" (such as numbers, names etc.) in memory. 
                     They allow fast lookup, addition and removal of items, and can 
                     be used to implement either dynamic sets of items, 
                     or lookup tables that allow finding an item by its key 
                     (e.g., finding the phone number of a person by name).
                  </SkyLight>
              </div>
              <p>
                The Bubble Sort Algorithm is one of the most famous sorting
                algorithms known to the computer science community and works by 
                measuring the size of two values and sorting them that way till
                it has went through all the values in the set.
              </p>

              <div className="bubble-img"><img src={'http://visualgo.net/img/gif/bst.gif'} alt="boohoo" className="img-responsive"/></div>
          </div>
	    );
	}
}



export default Binary;