import React from 'react';
import './fnComponent.css';

const FnComponent = () => {
  return (
    <div class="fn-component">
      <div>
        <h2>Created using functional component</h2>
        <div>
          <p>This is done using external css</p>
          <p style={{ color: 'white' }}>This is done using inline css</p>
        </div>
      </div>
    </div>
  );
};

export default FnComponent;
