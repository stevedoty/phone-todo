import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    page1: {
        list: {
            title: 'this is my list title',
            details: ['1st','2nd','3rd'],
            sublist: [
                {
                    title: 'this is my 1st sublist title',
                    details: ['1st','2nd','3rd']
                },
                {
                    title: 'this is my 2nd sublist title',
                    details: ['1st','2nd','3rd']
                }
            ]
        }
    },
    completedList: ['first completed item'],
    inputValue:''
  };
//===========================================
//FUNCTIONS
//===========================================
//handle input value
  handleChange=(e)=>{
    let currentInputValue=e.target.value
    this.setState({inputValue: currentInputValue})
  }
//====================
//add item
  handleAddItem = () => {
    let list = this.state.list
    list.push(this.state.inputValue)
    this.setState({list: list})
    this.setState({inputValue: ''})
  };
//====================
//remove item
  handleRemoveItem = (e) => {
    let list = this.state.list
    //identified index of item selected
    let selected = e.target.parentNode.childNodes[1].textContent
    function selectedItem(item, index){
        return item == selected
    }
    let index = list.findIndex(selectedItem)
    //remove item selected from list
        //modify list
        list.splice(index,1)
        //update this.state.list
        this.setState({list:list})
  };
//====================
//move item
    //change currentIndex to newIndex
//====================
//edit item
  handleEditItem = (e) => {
    let list = this.state.list
    //change index of selected to desired
    //update list
  };
//====================
//mark as item as completed
  handleCompleted = (e) => {
  //copy item, remove from List, add to completedList
    //create list clone
    let list = this.state.list
    //id selected
    let selected = e.target.parentNode.childNodes[1].textContent
    function selectedItem(item, index){
        return item == selected
    }
    let index = list.findIndex(selectedItem)
    //strikethrough selected
    //striked items always last
    //update list
    //this.setState({list:list})
    }
    //onClick
//====================
//mark as item as incomplete
  handleInComplete = (e) => {
  //copy item, remove from List, add to completedList
    //create list clone
    let list = this.state.list
    //id selected
    let selected = e.target.parentNode.childNodes[1].textContent
    function selectedItem(item, index){
        return item == selected
    }
    let index = list.findIndex(selectedItem)
    //strikethrough selected
    //striked items always last
    //update list
    //this.setState({list:list})
    }
    //onClick
//====================

//===========================================
//===========================================
  render() {
  console.log(this.state.page1.list.details[0])
    return (
      <div className="App">
        <div className="list">
            <div className='list-title'>{this.state.page1.list.title} \\ {this.state.page1.list.details.map( (detail, i) => detail)}
            </div>
            {this.state.page1.list.sublist.map((subitem,i)=>(
            <div key={i} className='item'>
                <button className="button" onClick={this.handleCompleted}>done</button>
                {subitem.title}
                <button className="button" onClick={this.handleRemoveItem}>remove</button>
            </div>)
            )}
        </div>
        <div className='completed-list'>
        {'completedList'}
        {this.state.completedList.map((completedItem,i)=>(
            <div key={i} className='item'>
                <strike>{completedItem}</strike>
            </div>
        ))}
        </div>

        <div className="add-item">

          <input
          className="input-field"
          placeholder="type here"
          onChange={this.handleChange}
          value={this.state.inputValue}
          />
          <button className="button" onClick={this.handleAddItem}>add</button>

        </div>
      </div>
    );
  }
}

export default App;
