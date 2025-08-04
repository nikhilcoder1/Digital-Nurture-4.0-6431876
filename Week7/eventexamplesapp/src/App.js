import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Bind handlers
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  sayHello() {
    alert('Hello! This is a static message.');
  }

  handleIncrement() {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayWelcome(message) {
    alert(`Message: ${message}`);
  }

  handleClick(event) {
    alert("I was clicked"); // Synthetic event
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handleClick}>Synthetic Event Button</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;