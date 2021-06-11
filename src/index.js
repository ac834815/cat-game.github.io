import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const questions = [
  "Subjects are healthy young or middle-aged adults",
  "Study involves a category learning task with novel category structures",
  "Study compares post-learning and pre-learning neural data",
  "Study uses functional neuroimaging during a task that is unrelated to categorization",
  "Study uses an experimental or quasi-experimental design",
];

class Question extends React.Component {
  render () {
    return this.props.questionIndex !== 5 ? <h1>{questions[this.props.questionIndex]}</h1> : <h1>Choose "{this.props.decision}"</h1>;
  }
}

class Button extends React.Component {
  render() {
      return (
          <button onClick={this.props.onClick}>
              {this.props.value}
          </button>
      );
  }
};

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      decision: "Yes",
    }
  }

  handleClick(buttonValue) {
    let newQuestionIndex;
    let newDecision = this.state.decision;

    if (buttonValue === "No") {
      newQuestionIndex = 5;
      newDecision = "No";
    } else if (buttonValue === "Reset") {
      newQuestionIndex = 0;
      newDecision = "Yes";
    } else if (buttonValue === "Unclear") {
      newQuestionIndex = this.state.questionIndex + 1;
      newDecision = "Maybe";
    } else {
      newQuestionIndex = this.state.questionIndex + 1;
    }


    this.setState(
      {questionIndex: newQuestionIndex,
      decision: newDecision}
    );
  }

  renderButtons() {
    if (this.state.questionIndex !== 5) {
      return(
        <div className="buttonRow">
          <Button value="No" onClick={() => this.handleClick("No")}/>
          <Button value="Unclear" onClick={() => this.handleClick("Unclear")}/>
          <Button value="Yes" onClick={() => this.handleClick("Yes")}/>
        </div>
      )
    } else {
      return(
        <div className="buttonRow">
          <Button value="Reset" onClick={() => this.handleClick("Reset")} />
        </div>
      )
    }
  }

  render() {
    return (
      <div id="screen">
        <Question questionIndex={this.state.questionIndex} decision={this.state.decision} />
        {this.renderButtons()}
      </div>
    );
  }
}


// function Square(props) {
//   return (
//     <button className='square' onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// };

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState(
//       {squares: squares,
//       xIsNext: !this.state.xIsNext,}
//     )
//   }

//   renderSquare(i) {
//     return (
//       <Square 
//       value={this.state.squares[i]} 
//       onClick={() => this.handleClick(i)}/>
//     );
//   }

//   render() {
//     const winner = calculateWinner(this.state.squares);
//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     };

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// };
  
// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{/* status */}</div>
//                     <ol>{/* TODO */}</ol>
//                 </div>
//             </div>
//         );
//     }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     };
//   };
//   return null;
// };
  
  // ========================================

ReactDOM.render(
    <Screen />,
    document.getElementById('root')
);