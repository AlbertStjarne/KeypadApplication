import React, { Component } from 'react';
import './NonDigitButton.css';

class NonDigitButton extends Component {
  render() {
    return (
      <div className='NonDigitButton'>
        <button className='nonDigitButton'>{this.props.digit}</button>
      </div>
    );
  }
}

export default NonDigitButton;
