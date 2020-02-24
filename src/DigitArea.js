import React, { Component } from 'react';
import DigitButton from './DigitButton';
import NonDigitButton from './NonDigitButton';
import CodeOutputBox from './CodeOutputBox';
import './DigitArea.css';

class DigitArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      digitAreaKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '', '', '', '', '', ''],
      enteredCode: [],
    };

    this.saveDigitInput = this.saveDigitInput.bind(this);
  }

  // saving entered digit to state
  saveDigitInput(receivedDigit) {
    this.setState(prevState => ({
      enteredCode: [...prevState.enteredCode, receivedDigit],
    }));
  }

  render() {
    return (
      <div className='DigitArea'>
        <p className='text'>Logga in med personlig kod</p>
        <CodeOutputBox code={this.state.enteredCode} />
        <div className='digitArea'>
          {this.state.digitAreaKeys.map((digit, id) => {
            if (digit === '') {
              return <NonDigitButton key={id} digit={digit}></NonDigitButton>;
            } else {
              return (
                <DigitButton
                  key={id}
                  digit={digit}
                  saveDigit={this.saveDigitInput}
                ></DigitButton>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default DigitArea;
