import react from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ContactList from './components/ContactList';
import AddContact from './components/AddContact'

function App() {

  return (
    <Router>
      <div>
      <Header />
      <Routes>
        <Route path = "/" element = {ContactList()}/>
        <Route path = "/add" element = {AddContact()}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App
