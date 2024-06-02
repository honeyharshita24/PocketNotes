import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    arr: [7, 8, 9],
  };
  handleEvent = (product) => {
    console.log(product);
    this.setState({count : this.state.count+1});
  }

  render() {
    console.log('props', this.props)
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={classes}>{this.Format()}</span>
        <button onClick={ () => {this.handleEvent(5)}} className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.arr.map((ar) => ( 
            <li key={ar} value={ar} >{ar}</li>
          ))}
        </ul>
      </div>
    );
  }
  Format() {
    const formatC = this.state.count;
    return formatC === 0 ? "zero" : formatC;
  }
}
