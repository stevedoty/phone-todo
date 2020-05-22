  //===========================================
  //FUNCTIONS
  //===========================================
  //handle input title value
export const handleTitleInputChange = () => {
//    let currentInputValue = e.target.value;
    console.log("log2")
//    this.setState({ inputTitleValue: currentInputValue })
  };
  //====================
  //handle input detail value
export const handleDetailInputChange = (e) => {
    let currentInputValue = e.target.value;
    this.setState({ inputDetailValue: currentInputValue });
  };
  //====================
  //add item
export const handleAddItem = () => {
    //create clone of sublist array
    let newSublist = this.state.page1.list.sublist;
    //create object
    let newSublistItemObject = {
      title: this.state.inputTitleValue,
      details: [ this.state.inputDetailValue ],
    };
    //push object to clone
    newSublist.push( newSublistItemObject );
    //update state
    this.setState({ sublist: newSublist, inputTitleValue: "", inputDetailValue: "" });
  };
  //====================
  //remove item
export const handleRemoveItem = (e) => {
    let newSublist = this.state.page1.list.sublist;
    //identified content of item selected
    let selected = e.target.parentNode.childNodes[1].textContent;
    //identify item index by content
    function selectedItem(item, index) {
      return item.title == selected;
    }
    let index = newSublist.findIndex(selectedItem);
    //remove item selected from list
    //modify list
    newSublist.splice(index, 1);
    //update this.state.list
    this.setState({ sublist: newSublist });
  };
  //====================
  //move item
  //change currentIndex to newIndex
  //====================
  //edit item
export const handleEditItem = (e) => {
    let list = this.state.list;
    //change index of selected to desired
    //update list
  };
  //====================
  //mark as item as completed
export const handleCompleted = (e) => {
    //copy item, remove from List, add to completedList
  };
  //====================
  //mark as item as incomplete
export const handleInComplete = (e) => {
    //copy item, remove from List, add to completedList
    //create list clone
    let list = this.state.list;
    //id selected
    let selected = e.target.parentNode.childNodes[1].textContent;
    function selectedItem(item, index) {
      return item == selected;
    }
    let index = list.findIndex(selectedItem);
    //strikethrough selected
    //striked items always last
    //update list
    //this.setState({list:list})
  };
  //onClick
  //====================