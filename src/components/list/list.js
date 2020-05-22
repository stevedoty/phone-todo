import React from 'react';
import ListItem from '../list-item/list-item.js'
import Masonry from 'react-masonry-component'

class List extends React.Component{
render(){
    return <div>
                <Masonry className="list" elementType={'ul'}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </Masonry>
           </div>
}
}



export default List