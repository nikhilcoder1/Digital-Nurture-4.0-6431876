import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const rupeeValue = parseFloat(this.state.rupees);
    if (!isNaN(rupeeValue)) {
      const euroValue = rupeeValue / 90; // assume 1 Euro = ₹90
      this.setState({ euros: euroValue.toFixed(2) });
    } else {
      alert("Please enter a valid number");
    }
  };

  render() {
    return (
      <div>
        <h2>Currency Converter (INR → EURO)</h2>
        <input
          type="text"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter amount in INR"
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euros && (
          <p>Converted Amount: €{this.state.euros}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;