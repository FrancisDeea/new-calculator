import './App.css';
import React from 'react';
import * as components from './components/export'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: null,
      input: 0,
      output: null
    }
    this.clear = this.clear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
  }

  // Add methods here
  clear() {
    this.setState({
      formula: null,
      input: 0,
      output: null
    })
  }

  handleNumber(e) {
    const regex = /\+|-|x|\//;
    const value = e.target.value;
    if (this.state.input === 0 | this.state.input === "0") {
      this.setState({
        input: value
      })
    } else if (regex.test(this.state.input)) {
      this.setState(state => ({
        formula: state.formula + state.input,
        input: value
      }))
    } else {
      this.setState(state => ({
        input: state.input + value
      }))
    }
  }

  handleSymbol(e) {
    const value = e.target.value;
    const formula = this.state.formula;
    const regex = /\+|-|x|\//;

    if (formula === null) {
      this.setState(state => ({
        formula: state.input,
        input: value
      }))
    } else if (regex.test(this.state.input)) {
      this.setState({
        input: value
      })
    } else {
      this.setState(state => ({
        formula: state.formula + state.input,
        input: value
      }))
    }
  }

  render() {
    return (
      <div id="calculator">
        <components.Display
          output={this.state.output ? this.state.output : this.state.input}
          formula={this.state.formula}
        />
        <components.Buttons
          handleClear={this.clear}
          handleNumber={this.handleNumber}
          handleSymbol={this.handleSymbol}
        />
      </div>
    )
  }
}


export default App;
