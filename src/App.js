import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import './App.css'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6">
            <List />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
