import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    list: [0],
    inputValue:''
  };

//add item
  handleAddItem = () => {
    let list = this.state.list
    list.push(this.state.inputValue)
    this.setState({list: list})
    this.setState({inputValue: ''})
  };
//remove item
  handleRemoveItem = () => {
    let list = this.state.list
    list.pop(this.state.inputValue)
    this.setState({list: list})
    this.setState({inputValue: ''})
  };

//handle input value
  handleChange=(e)=>{
    let currentInputValue=e.target.value
    this.setState({inputValue: currentInputValue})
  }

  render() {

    return (
      <div className="App">
        <div className="list">
            {this.state.list.map((item,i)=>
                <div key={i}>{item}</div>
            )}
        </div>
        <div className="add-item">
        <button className="button" onClick={this.handleRemoveItem}>remove</button>
          <input
          className="input-field"
          placeholder="type here"
          onChange={this.handleChange}
          value={this.state.inputValue}
          ></input>
          <button className="button" onClick={this.handleAddItem}>add</button>

        </div>
      </div>
    );
  }
}

export default App;
