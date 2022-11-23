import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Contact, Home } from './Pages'
import { Jewlry } from './Pages/Jewlry/Jewlry'

export const = () => {
  return (<>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<h1>Hello</h1>}/>
      </Routes>
    </Router>
  </>
  )}