import React, {Fragment, Component} from 'react';
import Square from '../square/Square';


class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            sqr: this.props.squares,
            isShown: true
        
        };
    }
 foo(){
     this.setState({
        isShown: !this.state.isShown
     })
 }

    render(){
        const isShown = this.state.isShown;
        return (
            <div className="Board">
                <Square 
                square={this.props.squares} 
                >
               
                </Square>
            </div>
          );
    }
}
 


export default Board;