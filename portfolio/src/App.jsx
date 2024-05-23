import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import PopUp from './components/Popup'
function App() {
  const [count, setCount] = useState(0)
  const [showPopUp, setShowPopUp] = useState(true);
  const handleClosePopUp = () => {
    setShowPopUp(false);
    };
  return (
    <>
      {/* <Navbar/> */}
      {showPopUp && <PopUp onClose={handleClosePopUp} />}
      
      <Home/>
    </>
  )
}

export default App
