import React, { Component } from 'react';
import './DigitButton.css';

class DigitButton extends Component {
  render() {
    return (
      <div className='DigitButton'>
        <button className='digitButton'>{this.props.digit}</button>
      </div>
    );
  }
}

export default DigitButton;
