import React from 'react';
import ListItem from '../list-item/list-item.js'
import Masonry from 'react-masonry-component'

let List = props => {
    return <div>
                <Masonry className="list">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                </Masonry>
           </div>
}



export default List