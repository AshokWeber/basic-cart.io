import React, { Component } from "react";

class Counter extends Component {
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = 0;
    return value === 0 ? x : value;
  }
  render() {
    let classes = this.getbadgeClasses();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        {/* {this.state.tags.length === 0 && "please create a tag"} */}
        {/* the above line works like for eg., run in console true && "hi" returns "hi"
      and true && "HI" && 1 will return 1 */}
        {/* {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;
