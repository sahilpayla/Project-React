import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
import Edit from './components/Edit';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/edit/:id' element={<Edit />} />
      </Routes>
    </Router>
  )
}

export default App