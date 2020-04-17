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
    background: teal;
    color: black;
    border: 2px solid black;
`
const Element = styled.div`
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    background: black;
    color: white;
    border: 2px solid black;
`
const ListItem = styled.li`
    list-style-type: none;
`

function App() {
var users = [{'username':'steve'}]
var title = ['title0','title1','title2','title3','title4','title5','title6','title7','title8','title9',]
var details = ['detail1', 'detail2','detail3']
var subTitles = ['sub1','sub2']
var dataBase = {
    title,
    details,
    subTitles,
}
 console.log(dataBase)
  return (

    <div className="App">
        <UserName>{users[0].username}</UserName>
        <Column>
            <Element>
                {title[0]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
            <Element>
                {title[1]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
        </Column>
        <Column>
            <Element>
                {title[2]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>



        </Column>

        <Column>
            <Element>
                {title[3]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
            <Element>
                {title[4]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
        </Column>
<Column>
            <Element>
                {title[5]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
            <Element>
                {title[6]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
        </Column>
        <Column>
            <Element>
                {title[7]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>



        </Column>

        <Column>
            <Element>
                {title[8]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
            <Element>
                {title[9]}-{details.map(detail=> <>-{detail}</>  )}

                {subTitles.map(sub=>(
                    <ListItem>{sub}-
                        {details.map(detail=><>-{detail}</>)}
                    </ListItem>
                ))}
            </Element>
        </Column>
    </div>
  );
}

export default App;
