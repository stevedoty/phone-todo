import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const UserName = styled.p`
    width:100%
`
const Column = styled.div`
    float: left;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    width: 95%;
    background: teal;
    color: black;
    border: 2px solid black;
`
const Element = styled.button`
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    width: 95%;
    background: black;
    color: white;
    border: 2px solid black;
`
const ListItem = styled.li`
    list-style-type: none;
`

function App() {
var users = [{'username':'steve'}]
var list = ['item0','item1','item2','item3','item4','item5','item6','item7','item8',]
var titles = ['title0','title1','title2','title3','title4','title5','title6','title7','title8','title9',]
var details = ['detail1', 'detail2','detail3']
var subTitles = ['sub1','sub2']

const handleClick = ()=>{
console.log('yo')
}

  return (

    <div className="App">
        <UserName>{users[0].username}</UserName>
        <Column>
            {list.map((item,i) => (
                <Element key={i} onClick={handleClick}>
                    {item}
                </Element>
            ))}

        </Column>
    </div>
  );
}

export default App;
