import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Contact, Home } from './Pages'
import { Jewlry } from './Pages/Jewlry/Jewlry'
import Drawer, {  }  from './Components/Drawer2/Drawer'
import { BottomNavigation } from '@mui/material'

export const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<h1>Hello</h1>}/>
        <Route path='/jewlry' element={<Jewlry/>}/>
        <Route path='/drawer' element={<Drawer/>}/>
        <Route path='/bottomnav' element={<BottomNavigation/>}/>
      </Routes>
    </Router>
  </>
  )}