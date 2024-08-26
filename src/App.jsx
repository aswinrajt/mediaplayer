import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import History from './pages/History'
import Landing from './pages/Landing'
import { Routes,Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   
    <Header/>
    <Routes>


    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/his' element={<History/>}/>
   </Routes>


    <Footer/>

    
    </>
  )
}

export default App
