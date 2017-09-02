// Vendor Assets
import React, { PureComponent } from 'react';

// Project Assets
import Header from '../Header';
import './App.css'

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="text-center">
            <h1>Welcome to Scratch</h1>
            <h5 className="text-secondary">
              A markdown editor for those who like it simple.
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
