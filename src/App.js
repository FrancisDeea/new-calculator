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
  }

  // Add methods here
  clear() {
    this.setState({
      input: null,
      output: 0
    })

    
  }

  render() {
    return (
      <div id="calculator">
        <components.Display output={this.state.output ? this.state.output : this.state.input} />
        <components.Buttons  handleClear={this.clear} />
      </div>
    )
  }
}


export default App;
