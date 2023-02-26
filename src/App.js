import './App.css';
import React from 'react';
import * as components from './components/export'
import { calculator } from './components/handleResult'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formula: [],
      input: "0",
      output: null
    }
    this.clear = this.clear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleSymbol = this.handleSymbol.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleResult = this.handleResult.bind(this);
  }

  // Add methods here
  clear() {
    this.setState({
      formula: [],
      input: "0",
      output: null
    })
  }

  handleNumber(e) {
    const operators = /\+|\-|\/|\x/;
    const value = e.target.value;
    const input = this.state.input;

    if (this.state.output !== null) {
      this.setState(state => ({
        output: null,
        input: value,
        formula: []
      }));
    } else 
    // if input is 0, prevent to input more than one zero.
    if (input === "0") {
      this.setState({
        input: value
      });
      // if a number is pressed when input is a symbol => show number as input
    } else if (input.match(operators)) {
      this.setState(state => ({
        input: value
      }));
      // default else: this allows to concat multiple numbers.
    } else {
      this.setState(state => ({
        input: state.input + value
      }));
    }
  }

  handleSymbol(e) {
    const symbol = e.target.value;
    const formula = this.state.formula;
    const input = this.state.input;
    const operators = /\+|\-|\/|\x/;

    if (this.state.output !== null) {
      this.setState(state => ({
        output: null,
        input: symbol,
        formula: [state.output.toString(), symbol]
      }))

    } else

    // if symbol is pressed when input is number => add number and symbol to formula and show symbol as input
    if (input.match(/[0-9]+/)) {
      this.setState(state => ({
        formula: [...state.formula, state.input, symbol],
        input: symbol
      }));
      // if "-" is pressed when there is already a symbol in formula => add another "-" symbol to handle negative numbers
    } else if (symbol.match(/-/) && formula[formula.length - 2].match(/[0-9]+/)) {
      this.setState(state => ({
        formula: [...state.formula, symbol],
        input: symbol
      }));
      // if there are 2 symbols in formula and another symbol is pressed => change the two previous symbol to the new one
    } else if (formula[formula.length - 1] === "-" && formula[formula.length - 2].match(operators)) {
      this.setState(state => ({
        formula: state.formula.slice(0, -2).concat(symbol),
        input: symbol
      }));
      // default else: if there is a symbol in formula and another symbol less "-" is pressed => change the old symbol to the new one
    } else {
      this.setState(state => ({
        formula: state.formula.slice(0, -1).concat(symbol),
        input: symbol
      }))
    }
  }

  handleDecimal() {
    const input = this.state.input;
    // if input doesn't include ".", you can add decimals
    if (!input.includes(".") && input.match(/[0-9]+/)) {
      this.setState(state => ({
        input: state.input + "."
      }))
    }
  }

  handleResult(e) {
    const formula = this.state.formula;
    const input = this.state.input;
    const operators = /\+|\-|\/|\x/;
    let result = undefined;

    if (this.state.output !== null) {
      return undefined
    } else {
      result = calculator(formula, input);
    }

    // if equals is pressed and formula ends with operator(s) => remove last symbol and add "=" and result
    if (formula.length !== 0 && formula[formula.length - 1].match(operators) && input.match(operators)) {
      if (formula[formula.length - 2].match(operators)) {
        this.setState(state => ({
          formula: [...state.formula.slice(0, -2), "=", result],
          output: result
        }))
      } else {
        this.setState(state => ({
          formula: [...state.formula.slice(0, -1), "=", result],
          output: result
        }))
      }
      // default else: if equals is pressed and input is a number => add input to formula, add "=" and show result
    } else {
      this.setState(state => ({
        formula: [...state.formula, state.input, "=", result],
        output: result
      }))
    }
  }
  

  render() {
    return (
      <div id="calculator">
        <components.Display
          output={this.state.output !== null ? this.state.output : this.state.input}
        />
        <components.Formula
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
