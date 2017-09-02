// Vendor Assets
import React, { PureComponent } from 'react';

// Project Assets
import Editor from '../Editor';
import Header from '../Header';
import Preview from '../Preview';
import './App.css'

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: "# Hello, World!",
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="text-center mb-4">
            <h1>Welcome to Scratch</h1>
            <h5 className="text-secondary">
              A markdown editor for those who like it simple.
            </h5>
          </div>

          <div className="row">
            <div className="col-md-6">
              <Editor content={this.state.content}/>
            </div>

            <div className="col-md-6">
              <Preview content={this.state.content}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
