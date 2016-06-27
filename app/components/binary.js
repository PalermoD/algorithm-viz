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
                    <p>
                         In computer science, binary search trees (BST), 
                         sometimes called ordered or sorted binary trees, 
                         are a particular type of containers: data structures 
                         that store "items" (such as numbers, names etc.) in memory. 
                         They allow fast lookup, addition and removal of items, and can 
                         be used to implement either dynamic sets of items, 
                         or lookup tables that allow finding an item by its key 
                         (e.g., finding the phone number of a person by name).
                     </p>
                     <p>
                         binary search is fast because it divides the number of items 
                         that need to be searched in half at each step. The only downside
                         is that binary search requires the list to be sorted. 
                         Let's try something crazy and actually store the items in 
                         the list just like they would be found if we did a binary search 
                         for each. That is, the start of the data structure would be the
                         middle item. If we move to the left then we see the middle of 
                         the left subset. Basically we're taking a linear list and changing 
                         it to an explicit binary search structure
                     </p>
                    
                  </SkyLight>
              </div>
              <p>
                They allow fast lookup, addition and removal of items, and can 
                be used to implement either dynamic sets of items, 
                or lookup tables that allow finding an item by its key 
                (e.g., finding the phone number of a person by name).
              </p>

              <div className="bubble-img"><img src={'http://visualgo.net/img/gif/bst.gif'} alt="boohoo" className="img-responsive"/></div>
          </div>
	    );
	}
}



export default Binary;