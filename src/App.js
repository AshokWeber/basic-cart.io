import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import Counters from "./Components/Counters";
import Inputnum from "./Components/input";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };
  //React LifeCycle Hooks
  constructor() {
    super();
    console.log("APP - Constructor");
  }
  componentDidMount() {
    console.log("APP - Mounted");
  }

  //End of React LifeCycle Hooks

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = counter => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = k => {
    const counters = this.state.counters;
    const index = counters.indexOf(k);
    counters[index].value--;
    this.setState({ counters });
  };
  value = () => {
    let getCurrentValue = this.state.counters.filter(c => c.value > 0).length;
    return getCurrentValue;
  };
  render() {
    //React LifeCycle Hooks
    console.log("APP - Rendered");
    //End of React LIfecycle Hooks
    return (
      <React.Fragment>
        <NavBar totalcounters={this.value()} />
        <main className="container">
          <Inputnum getValue={this.value()}></Inputnum>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          >
            {" "}
          </Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
