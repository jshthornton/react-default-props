import React, { Component } from 'react';

const DefaultProps = (defaultProps) => {
  return DecoratedComponent => {
    return class DefaultProps extends Component {
      static get defaultProps() {
        return defaultProps;
      }

      render() {
        return <DecoratedComponent {...this.props}/>
      }
    };
  }
}

export default DefaultProps;