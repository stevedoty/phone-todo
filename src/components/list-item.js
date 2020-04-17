import React from 'react';

import styled from 'styled-components'


const Element = styled.button`
    float: center;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    width: 95%;
    background: black;
    color:white;
`
const ListItem = (props) => {

const list = props.list

  return (
    <div className="ListItem">
        {list.map( item=>(
            <Element>{item}</Element>
        ))}
    </div>
  );
}

export default ListItem;
