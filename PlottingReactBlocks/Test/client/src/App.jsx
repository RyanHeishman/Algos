import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Subcontent from './components/Subcontent'
import Advertisment from './components/Advertisment'
import './App.css'

function App() {

  return (
    <div className='app'>
      
      <Header/>

      <Navigation/>

      <Main>

        <Subcontent/>
        <Subcontent/>
        <Subcontent/>
        <Advertisment/>

      </Main>

    </div>
  )
}

export default App
