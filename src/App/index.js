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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(content) {
    this.setState({ content })
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Editor
                content={this.state.content}
                handleChange={this.handleChange}
              />
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
