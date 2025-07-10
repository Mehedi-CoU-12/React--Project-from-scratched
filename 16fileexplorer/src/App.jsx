import React from 'react'
import { useState } from 'react'
import explorer from './Data/Data'
import Folder from './Components/Folder'

function App() {

  const [explorerData,setExplorerData]=useState(explorer)

  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  )
}

export default App