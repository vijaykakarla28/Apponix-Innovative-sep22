import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import { Contact, Home } from './pages'

export const App = () => {

    return (<>
    <Router>
        <Routes>
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<h1>hello im about</h1>}/>
        </Routes>
        </Router> 
    
    </>)
}