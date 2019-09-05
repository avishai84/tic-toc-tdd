import React from 'react';
import Board from './components/board/Board';
import Game from './components/game/Game';

function App() {
  return (
    <div className="App">
      <Game>
        <Board/>
      </Game>
    </div>
  );
}

export default App;
