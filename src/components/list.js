import React from 'react';
import ListItem from './list-item.js'
import styled from 'styled-components'


const Column = styled.button`
    float: center;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    width: 95%;
    background: teal;
`
const List = () => {
const list = [0,1,2,3,4,5,6]
  return (
    <div className="List">
        <Column>
            <ListItem list={list}/>
        </Column>
    </div>
  );
}

export default List;
