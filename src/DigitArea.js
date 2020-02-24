import React, { Component } from 'react';
import DigitButton from './DigitButton';
import NonDigitButton from './NonDigitButton';
import CodeOutputBox from './CodeOutputBox';
import './DigitArea.css';

const startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '', '', '', '', '', ''];

class DigitArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      digitAreaKeys: [],
      enteredCode: [],
    };

    this.randomizeArrayValues = this.randomizeArrayValues.bind(this);
    this.saveDigitInput = this.saveDigitInput.bind(this);
  }

  componentDidMount() {
    this.randomizeArrayValues(startArray);
  }

  // randomize values within an array
  randomizeArrayValues(array) {
    let counter = array.length;
    let temp;
    let index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);
      counter--;
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    this.setState({
      digitAreaKeys: array,
    });
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
