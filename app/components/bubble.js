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

                      <p>
                          Bubble sort algorithm starts by comparing the first two 
                          elements of an array and swapping if necessary, i.e., if 
                          you want to sort the elements of array in ascending order 
                          and if the first element is greater than second then, you 
                          need to swap the elements but, if the first element is smaller 
                          than second, you mustnt swap the element. Then, again second 
                          and third elements are compared and swapped if it is necessary 
                          and this process go on until last and second last element is compared 
                          and swapped. This completes the first step of bubble sort.
                      </p>
                      
                      <p>
                          If there are n elements to be sorted then, the process mentioned above 
                          should be repeated n-1 times to get required result. But, for 
                          better performance, in second step, last and second last elements 
                          are not compared becuase, the proper element is automatically placed 
                          at last after first step. Similarly, in third step, last and second 
                          last and second last and third last elements are not compared and so on
                      </p>

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