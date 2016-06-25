import React, {Component} from 'react';
import SkyLight from 'react-skylight';


class HashTable extends Component {
	render(){
		return(
          <div className="bubble-sort col-xs-12">
              <h1>Hash Table</h1>
              <button onClick={() => this.refs.simpleDialog.show()}>Learn More</button>
              <div className="pop-up">
                  <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hash Table">
                      A hash table (hash map) is a data structure 
                      used to implement an associative array, a structure that can 
                      map keys to values. A hash table uses a hash function to compute 
                      an index into an array of buckets or slots, from which the desired 
                      value can be found.
                  </SkyLight>
              </div>
              <p>
                A hash table (hash map) is a data structure 
                used to implement an associative array, a structure that can 
                map keys to values. A hash table uses a hash function to compute 
                an index into an array of buckets or slots, from which the desired 
                alue can be found.
              </p>

              <div className="bubble-img"><img src={'http://visualgo.net/img/gif/hashtable.gif'} alt="boohoo" className="img-responsive"/></div>
          </div>
	    );
	}
}



export default HashTable;