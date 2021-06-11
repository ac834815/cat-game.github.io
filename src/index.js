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
    return this.props.questionIndex !== 5 ? <h3>{questions[this.props.questionIndex]}</h3> : <h3>Choose "{this.props.decision}"</h3>;
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

ReactDOM.render(
    <Screen />,
    document.getElementById('root')
);