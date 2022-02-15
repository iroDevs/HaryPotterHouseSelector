import React from 'react'
import Button from '../components/Buttons'
import ChapeuSeletor from '../images/chapeuSeletor.png'
import Nav from '../components/Nav'
export default function Home () {
  return (
    <div className="container-fluid Home">
      <Nav />
      <div className='title-menu'>
         <img className="imgChapeu" src={ChapeuSeletor}></img>
      <h1>Chapéu Selector</h1>
      <Button></Button>
      </div>

    </div>
  )
}
