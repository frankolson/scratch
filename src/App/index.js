// Vendor Assets
import React, { PureComponent } from 'react';

// Project Assets
import Editor from '../Editor';
import Header from '../Header';
import Preview from '../Preview';
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

          <div className="row">
            <div className="col-md-6">
              <Editor />
            </div>

            <div className="col-md-6">
              <Preview value="testing"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
