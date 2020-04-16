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
    width: 45%;
    background: transparent;
    color: black;
    border: 2px solid black;
`
const Element = styled.div`
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    background: transparent;
    color: black;
    border: 2px solid black;
`
const ListItem = styled.li`
    list-style-type: none;
`

function App() {
var users = [{'username':'steve'}]
var title = ['title1']
var details = ['detail1', 'detail2']
var subTitles = ['sub1','sub2']
var dataBase = {
    title,
    details,
    subTitles,

}
  return (
    <div className="App">
        <UserName>{users[0].username}</UserName>
        <Column>
            <Element>
                {title.map(item=>item)} ; {details.map(detail=> detail  )}

                {subTitles.map(sub=><ListItem>sub</ListItem>)}
            </Element>
            <Element>
                {title.map(item=>item)} ; {details.map(detail=> detail  )}

                {subTitles.map(sub=><ListItem>sub</ListItem>)}
            </Element>
        </Column>
        <Column>
            <Element>
                {title.map(item=>item)} ; {details.map(detail=> detail  )}

                {subTitles.map(sub=><ListItem>sub</ListItem>)}
            </Element>
            <Element>
                {title.map(item=>item)} ; {details.map(detail=> detail  )}

                {subTitles.map(sub=>sub)}
            </Element>
            <Element>
                {title.map(item=>item)} ; {details.map(detail=> detail  )}

                {subTitles.map(sub=>(<ListItem>sub</ListItem>))}
            </Element>
        </Column>
    </div>
  );
}

export default App;
