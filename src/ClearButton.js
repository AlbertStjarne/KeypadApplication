import React, { Component } from 'react';
import './ClearButton.css';

class ClearButton extends Component {
  constructor(props) {
    super(props);

    this.deleteLastInput = this.deleteLastInput.bind(this);
  }

  // trigger to parent to delete last entered digit
  deleteLastInput() {
    this.props.deleteLastInput();
  }

  render() {
    return (
      <div className='ClearButton'>
        <button className='clearButton' onClick={this.deleteLastInput}>
          X
        </button>
      </div>
    );
  }
}

export default ClearButton;
