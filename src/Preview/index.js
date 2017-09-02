// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  value: PropTypes.string.isRequired,
}

class Preview extends PureComponent {
  render() {
    return (
      <div>
        <h6>Preview</h6>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

Preview.propTypes = propTypes;

export default Preview;
