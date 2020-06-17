import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'
import './App.css'


const App = () => {
  return (
    <>
      <Button text="Props Button" />
      <Button text="Second Button" />
      <Button text="Third Button" />
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
