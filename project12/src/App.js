//CSS
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Details'
import Home from './Home';
//components
//start!
function App() {
    const [second,setSecond] = useState(0)
    function add(){
        setSecond(second+1)
    }
    return(
        <header className="header">
            <div className='container'>
                {/* {user ? <Chat/> : <SignIn/>} */}
               <Routes>
                   <Route path='/' element={ <Home/>}/>
                   <Route path=':name' element={ <Details/>}/>
               </Routes>
            </div>

        </header>
    )
 
}

export default App;