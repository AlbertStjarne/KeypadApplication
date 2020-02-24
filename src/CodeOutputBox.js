import React, { Component } from 'react';
import './CodeOutputBox.css';

class CodeOutputBox extends Component {
  render() {
    return (
      <div className='CodeOutputBox'>
        {this.props.code.length > 0
          ? this.props.code.map(x => '* ')
          : 'Ange din kod'}
      </div>
    );
  }
}

export default CodeOutputBox;
