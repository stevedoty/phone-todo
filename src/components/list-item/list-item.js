import React from 'react';
import Masonry from 'react-masonry-component'

let ListItem = props => {
    return <div>
                <Masonry>
                    <div className="list-item">
                        <div>title</div>
                        <div>detail</div>
                        <div>subtitle</div>
                        <div>subdetail</div>
                    </div>
                </Masonry>
           </div>
}



export default ListItem;