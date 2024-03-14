import React from 'react'
import Home from './page/Home/Home'
import { Routing } from './components/Routing/Routing'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </div>
  )
}

export default App