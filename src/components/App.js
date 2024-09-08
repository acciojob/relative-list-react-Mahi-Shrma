import React from 'react'

const App = () => {

const relatives=[
  {key:'relativeListItem1',name:"Rinku"},
  {key:'relativeListItem2',name:'Priya'},
  {key:'relativeListItem3',name:'Sippi'},
  {key:'relativeListItem4',name:'Parul'},
  {key:'relativeListItem5',name:'Deepak'}
]

  return (
    <div id="main">
              <ol key="relativeList">
               {relatives.map(relative=>(
                <li key={relative.key}>{relative.name}</li>
               ))}
              </ol>
    </div>
  )
}

export default App
