import React from 'react'
import "./App.css"
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpensis from './components/IncomeExpensis'

const App = () => {
  return (
    <diV>
      <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpensis/>
      </div>
      </diV>
  )
}

export default App