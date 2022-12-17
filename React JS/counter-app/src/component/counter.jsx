import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count : 0  
      
    };


    render() {
     
    return( 
        <div>
            <span style={{fontSize:30} }  >{this.formatCount()}</span>
            <button>Increment</button>
        </div>) ;

         
    }
    
    formatCount(){

    const {count}  = this.state ; 
    return count === 0 ? 'zero': this.state.count ; // this is know as the single line if statement;  

    }

}
 
export default Counter;