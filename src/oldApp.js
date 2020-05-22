import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    page1: {
      list: {
        title: "this is my list title",
        details: ["1st", "2nd", "3rd"],
        sublist: [
          {
            title: "this is my 1st sublist title",
            details: ["1st", "2nd", "3rd"],
          },
          {
            title: "this is my 2nd sublist title",
            details: ["1st", "2nd", "3rd"],
          },
        ],
      },
    },
    completedList: ["first completed item"],
    inputTitleValue: "hello",
    inputDetailValue: "",
  };


  //===========================================
  //===========================================
  render() {
  console.log(this.state.page1.list.sublist)
    return (
      <div className="App">
        <div className="page">
          <div className="list">
            <div className="list-title">
              {this.state.page1.list.title} \
              {this.state.page1.list.details.map((detail, i) => (
                <>\ {detail} </>
              ))}
            </div>
            {this.state.page1.list.sublist.map((subitem, i) => (
              <div key={i} className="item">
                <button className="button" onClick={this.handleCompleted}>
                  done
                </button>
                {subitem.title}
                {this.state.page1.list.details.map((detail, i) => (
                    <>\ {detail} </>
                  ))}
                <button className="button" onClick={this.handleRemoveItem}>
                  remove
                </button>
              </div>
            ))}
          </div>
          <div className="completed-list">
            {"completedList"}
            {this.state.completedList.map((completedItem, i) => (
              <div key={i} className="item">
                <strike>{completedItem}</strike>
              </div>
            ))}
          </div>

          <div className="add-item">
            <input
              className="input-field"
              placeholder="title here"
              onChange={this.handleTitleInputChange}
              value={this.state.inputTitleValue}
            />
            <input
              className="input-field"
              placeholder="detail here"
              onChange={this.handleDetailInputChange}
              value={this.state.handleDetailInputChange}
            />
            <button className="button" onClick={this.handleAddItem}>
              add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
