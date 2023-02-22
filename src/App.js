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
  }

  // Add methods here
  clear() {
    this.setState({
      input: 0,
      output: null
    })
  }

  handleNumber(e) {
    const value = e.target.value;
    if (this.state.input === 0 | this.state.input === "0") {
      this.setState({
        input: value
      })
    } else {
      this.setState(state => ({
        input: state.input + value
      }))
    }
  }

  render() {
    return (
      <div id="calculator">
        <components.Display output={this.state.output ? this.state.output : this.state.input} />
        <components.Buttons  handleClear={this.clear} handleNumber={this.handleNumber} />
      </div>
    )
  }
}


export default App;
