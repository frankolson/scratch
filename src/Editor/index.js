// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  content: PropTypes.string.isRequired,
}

class Editor extends PureComponent {
  render() {
    return (
      <div>
        <h6>Markdown</h6>
        <textarea
          className="form-control"
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
