import React from 'react';
import ListItem from '../list-item/list-item.js'
import Masonry from 'react-masonry-component'

class List extends React.Component{

render(){
const page1 = this.props.props.state.initialReducer.page1
    return <div>
                <Masonry className="list" elementType={'ul'}>
                          {page1.map(list => <div className="list-item shown">
                                    {list.title}_{list.details.map( detail => <>_{detail}</> )} |:|
                                    {list.sublist.map( subitem => <div>=>{subitem.title}_{subitem.details.map(detail => <>_{detail}</> )} |:|</div> )}
                                </div>
                          )}
                </Masonry>
           </div>
}
}



export default List