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
    this.handleNegative = this.handleNegative.bind(this);
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
    const regex = /\+|x|\//;
    const value = e.target.value;
    const input = this.state.input;
    
  }

  handleSymbol(e) {
    const value = e.target.value;
    const formula = this.state.formula;
    const regex = /^\+$|^-$|^x$|^\/$/;

  }

  handleNegative() {
 
  }

  handleDecimal() {
    const input = this.state.input;
 
  }

  handleResult() {
    const formula = this.state.formula;
    const input = this.state.input;

  }

  render() {
    return (
      <div id="calculator">
        <components.Display
          output={this.state.output !== null ? this.state.output : this.state.input}
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
