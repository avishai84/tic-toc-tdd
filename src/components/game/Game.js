import React from 'react';


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      square: Array(9).fill(null),
      nextTurnIs: true,
      mark: 'X'

    };

  }
  // update which player is next
   updateGame(e, state, mark){
    this.setState({
      nextTurnIs: !this.state.nextTurnIs,
      mark: this.state.nextTurnIs ? 'O' : 'X' 
      })
    }


  render(){

  const nextStep = this.state.mark;

    return (
      <div className="game">
       <button onClick={this.updateGame.bind(this)}></button>
       <React.Fragment>
        Next player: <p>{nextStep }</p>
       </React.Fragment>
      </div>
    );
  } 
}

export default Game;