import React from 'react';
import './App.css';
import ClsComponent from './components/clsComponent';
import FnComponent from './components/fnComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClassComponentVisible: true,
      isFunctionComponentVisible: true,
    };
  }

  handleClass = () => {
    this.setState(prevState => ({
      isClassComponentVisible: !prevState.isClassComponentVisible,
    }));
  };

  handleFunction = () => {
    this.setState(prevState => ({
      isFunctionComponentVisible: !prevState.isFunctionComponentVisible,
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="heading">
          STYLING USING FUNCTIONAL AND CLASS COMPONENT
        </div>
        <div className="btn-container">
          <button
            className="toggleClassComponentVisibility"
            onClick={this.handleClass}
          >
            Toggle Class Component
          </button>
          <button
            className="toggleFunctionComponentVisibility"
            onClick={this.handleFunction}
          >
            Toggle Function Component
          </button>
        </div>
        <div className="components-container">
          {this.state.isClassComponentVisible ? <ClsComponent /> : ''}
          {this.state.isFunctionComponentVisible ? <FnComponent /> : ''}
        </div>
      </div>
    );
  }
}

export default App;
