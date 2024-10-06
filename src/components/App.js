import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBallVisible: false,
      ballPosition: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ isBallVisible: true });
  };

  renderChoice() {
    if (this.state.isBallVisible) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return <div className="game">{this.renderChoice()}</div>;
  }
}

export default App;
