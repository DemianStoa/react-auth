import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
</BrowserRouter>
    </div>
  )
}

export default App
