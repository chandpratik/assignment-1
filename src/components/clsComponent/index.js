import React from 'react';
import './clsComponent.css';

class ClsComponent extends React.Component {
  render() {
    return (
      <div class="class-component">
        <div>
          <h2>Created using class component</h2>
          <div>
            <p>This is done using external css</p>
            <p style={{ color: 'white' }}>This is done using inline css</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ClsComponent;
