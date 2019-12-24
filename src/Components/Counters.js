import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  //React LifeCycle Hooks to check after updation
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    //If you want to detect some changes and do some actoin after that, then below is the reference
    //if (prevProps.counter.value !== this.props.counter.value) {
    //Make a ajax call and get new data from the server.
    //}
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  //End of LifeCycle Hook

  render() {
    //React LifeCycle Hooks
    console.log("Counter - Rendered");
    //End of LifeCycle Hook

    //below line is called object structuring where we can remove this.props in return and simply call the object instead of this.props.onReset likewise
    const {
      onReset,
      counters,
      onDecrement,
      onDelete,
      onIncrement
    } = this.props;
    //console.log("Counter is ", counter);
    return (
      <div>
        <button className="btn btn-danger btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
