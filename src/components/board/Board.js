import React, {Fragment, Component} from 'react';
import Square from '../square/Square';


class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            sqr: this.props.squares
        
        };
    }
 

    render(){

        return (
            <div className="Board">
         
            </div>
          );
    }
}
 


export default Board;