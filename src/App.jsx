import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Mid from './components/Mid'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Header/>
      <Mid/>
     <Footer/>

     </div>    
    </>
  )
}

export default App
