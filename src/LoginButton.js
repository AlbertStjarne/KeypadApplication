import React, { Component } from 'react';
import './LoginButton.css';

class LoginButton extends Component {
  constructor(props) {
    super(props);

    this.printCode = this.printCode.bind(this);
  }

  // logging the entered code
  printCode() {
    this.props.enteredCode.length > 0
      ? console.log(
          `%c👮 Din inmatade kod: ${this.props.enteredCode} \nKeep it safe 👮‍♀️`,
          'color: red; font-weight: bold; background-color: pink'
        )
      : console.log(
          `%cMata in kod före inlogging`,
          'color: blue; font-weight: bold; background-color: pink;'
        );
  }

  render() {
    return (
      <button className='loginButton' onClick={this.printCode}>
        Logga in
      </button>
    );
  }
}

export default LoginButton;
