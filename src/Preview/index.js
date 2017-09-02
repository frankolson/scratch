// Vendor Assets
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js';

const propTypes = {
  content: PropTypes.string,
}

const defaultProps = {
  content: '',
}

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code) => (
    hljs.highlightAuto(code).value
  )
});

class Preview extends PureComponent {
  render() {
    const { content } = this.props;
    return (
      <div>
        <h6>Preview</h6>
        <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
      </div>
    );
  }
}

Preview.propTypes = propTypes;
Preview.defaultProps = defaultProps;

export default Preview;
