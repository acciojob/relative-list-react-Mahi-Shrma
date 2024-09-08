import React from 'react'

const App = () => {

const relatives=[
  {key:'uncle',name:"Rinku"},
  {key:'Aunt',name:'Priya'},
  {key:'Masi',name:'Sippi'},
  {key:'sister',name:'Parul'},
  {key:'mama',name:'Deepak'}
]

  return (
    <div id="main">
              <ol key="relativesList">
               {relatives.map(relative=>(
                <li key={relative.key}>{relative.name}</li>
               ))}
              </ol>
    </div>
  )
}

export default App
