import { Component } from 'react';

class BaseLayouts extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default BaseLayouts;
