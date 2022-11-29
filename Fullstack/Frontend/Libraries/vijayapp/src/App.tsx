import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Contact, Home, Jewlry, Mylogin } from './Pages'
import { Layout } from './Pages/Layout'
import { Mytest } from './Pages/Test/Mytest'



export const App = () => {
  return (<>
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/jewlry' element={<Jewlry />} />
          <Route path='/mylogin' element={<Mylogin />} />
          <Route path='/test' element={<Mytest/>}/>
        </Routes>
      </Layout>
    </Router>
  </>
  )
}