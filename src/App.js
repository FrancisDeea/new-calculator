import './App.css';
import React from 'react';
import * as components from './components/export'
import { calculator } from './components/handleResult'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: [],
      input: 0,
      output: null
    }
    this.clear = this.clear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
    this.handleNegative = this.handleNegative.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  // Add methods here
  clear() {
    this.setState({
      formula: [],
      input: 0,
      output: null
    })
  }

  handleNumber(e) {
    const regex = /\+|x|\//;
    const value = e.target.value;
    const input = this.state.input;
    if (this.state.input === 0 | this.state.input === "0") {
      this.setState({
        input: value
      })
    } else if (regex.test(input) || input === "-") {
      this.setState(state => ({
        formula: state.formula.concat(state.input),
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
    const regex = /^\+$|^-$|^x$|^\/$/;

    if (formula.length === 0) {
      this.setState(state => ({
        formula: state.formula.concat(state.input),
        input: value
      }))
    } else if (this.state.input.match(regex)) {
      this.setState({
        input: value
      })
    } else {
      this.setState(state => ({
        formula: state.formula.concat(state.input),
        input: value
      }))
    }
  }

  handleNegative() {
    if (/[0-9]+/.test(this.state.input)) {
      this.setState(state => ({
        input: (-state.input).toString()
      }))
    }
  }

  handleDecimal() {
    const input = this.state.input;
    if (!input.includes(".")) {
      this.setState(state => ({
        input: state.input + "."
      }))
    }
  }

  handleResult() {
    const formula = this.state.formula;
    const input = this.state.input;
    const result = calculator(formula, input);
    this.setState(state => ({
      formula: state.formula.concat(state.input, "=", result),
      output: result
    }))
    console.log(result)
  }

  render() {
    return (
      <div id="calculator">
        <components.Display
          output={this.state.output ? this.state.output : this.state.input}
          formula={this.state.formula.join(" ")}
        />
        <components.Buttons
          handleClear={this.clear}
          handleNumber={this.handleNumber}
          handleSymbol={this.handleSymbol}
          handleNegative={this.handleNegative}
          handleDecimal={this.handleDecimal}
          handleResult={this.handleResult}
        />
      </div>
    )
  }
}


export default App;
