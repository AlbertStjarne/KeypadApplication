import React, { Component } from 'react';
import './DigitButton.css';

class DigitButton extends Component {
  constructor(props) {
    super(props);

    this.sendCode = this.sendCode.bind(this);
  }

  // sending entered code to parent
  sendCode() {
    this.props.saveDigit(this.props.digit);
  }

  render() {
    return (
      <div className='DigitButton'>
        <button className='digitButton' onClick={this.sendCode}>
          {this.props.digit}
        </button>
      </div>
    );
  }
}

export default DigitButton;
