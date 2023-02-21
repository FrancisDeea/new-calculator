import './App.css';
import * as components from './components/export'

function App() {
  return (
    <div id="calculator">
      <components.Display />
      <components.Buttons />
    </div>
  );
}

export default App;
