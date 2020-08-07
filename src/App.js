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
           </div>

            <div className="box">
                <div className="grandparent">
                    <div className="title">GP...</div>
                        <div className="detail">det</div>
                        <div className="detail">det</div>
                        <div className="detail">det</div>
                    <br/>
                    <br/>
                    <div className="parent">
                        <div className="title">P...</div>
                            <div className="detail">det</div>
                            <div className="detail">det</div>
                            <div className="detail">det</div>
                        <br/>
                        <br/>
                        <div className="child">
                            <div className="title">C...</div>
                                <div className="detail">det</div>
                                <div className="detail">det</div>
                                <div className="detail">det</div>
                            <br/>
                            <br/>

                            <div className="grandchild">
                                <div className="title">GC...</div>
                                    <div className="detail">det</div>
                                    <div className="detail">det</div>
                                    <div className="detail">det</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grandparent">
                    <div className="title">GP...</div>
                        <div className="detail">det</div>
                        <div className="detail">det</div>
                        <div className="detail">det</div>
                    <br/>
                    <br/>
                    <div className="parent">
                        <div className="title">P...</div>
                            <div className="detail">det</div>
                            <div className="detail">det</div>
                            <div className="detail">det</div>
                        <br/>
                        <br/>
                        <div className="child">
                            <div className="title">C...</div>
                                <div className="detail">det</div>
                                <div className="detail">det</div>
                                <div className="detail">det</div>
                            <br/>
                            <br/>
                            <div className="grandchild">
                                <div className="title">GC...</div>
                                    <div className="detail">det</div>
                                    <div className="detail">det</div>
                                    <div className="detail">det</div>
                            </div>
                        </div>
                    </div>
                </div>
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
