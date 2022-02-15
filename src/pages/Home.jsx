import React from 'react'
import Button from '../components/Buttons'
export default function Home () {
  return (
    <div className="container-fluid Home">
      <nav>
      <ul>
        <li>Meu GitHub</li>
        <li>Meu Linkedin</li>
        <li id="btn-luz">Litgh Mode</li>
      </ul>
      </nav>
      <div className='title-menu'>
      <h1>Chapéu Selector</h1>
      <Button></Button>
      </div>

    </div>
  )
}
