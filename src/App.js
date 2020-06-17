import React from 'react'
import './App.css'

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
  return (
    <>
      <h1 className="hotdog">Hello World!</h1>

      <h3>Numbers:</h3>
      <ul>
        {
          nums.map(num => <li>{num}</li>)
        }
      </ul>
    </>
  )
}

export default App
