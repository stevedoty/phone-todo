import React, { Component } from "react";
import {
    handleTitleInputChange,
    handleClick
} from './redux/actions.js'
import { connect } from 'react-redux';

import List from './components/list/list.js'
import InfoForm from './components/form/form.js'
import AddButton from './components/add-button/add-button.js'
import "./App.css";

class App extends Component {

  render() {
   return (
         <div className="App">
                 <div className="add-item">
                     <InfoForm/>
                     <AddButton/>
                 </div>
           <div className="page">
                <List props={this.props}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

           </div>
         </div>
       );
  }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTitleInputChange: (event)=>dispatch(handleTitleInputChange(event)),
        handleClick: (event)=>dispatch(handleClick(event)),
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
