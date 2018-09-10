import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionType from "./store/action";
class App extends Component {
  state = {
    inputTxt: "",
    counter: 0
  };

  handleChange = e => {
    console.log("e is", e.target);
    this.setState({
      inputTxt: e.target.value,
      counter: e.target.value.length
    });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          //  onChange={this.handleChange}
          //  value={this.state.inputTxt}
          onChange={this.props.onHandleChange}
          value={this.props.txt}
          // {this.state.inputTxt} with counter of {this.state.counter}
          //
        />
        {this.props.txt} with counter of {this.props.ctr}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    txt: state.inputTxt,
    ctr: state.counter
  };
};
const mapDispatchToProp = dispatch => {
  return {
    onHandleChange: evt => dispatch({ type: actionType.TEXT_VALUE, entry: evt })
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(App);
