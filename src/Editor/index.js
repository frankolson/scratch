// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

class Editor extends PureComponent {
  render() {
    return (
      <div>
        <h6>Markdown</h6>
        <textarea
          className="form-control"
          onChange={e => this.props.handleChange(e.target.value)}
          rows="30"
          value={this.props.content}
        >
        </textarea>
      </div>
    );
  }
}

Editor.propTypes = propTypes;

export default Editor;
