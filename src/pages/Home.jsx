import React from 'react'
import Button from '../components/Buttons'
import ChapeuSeletor from '../images/chapeuSeletor.png'
export default function Home () {
  return (
    <div className="container-fluid Home">
      <nav>
      <ul>
        <li><a href='https://www.linkedin.com/in/pedro-2001/'>Meu Linkedin</a></li>
        <li><a href='https://github.com/iroDevs'>Meu GitHub</a></li>
        <li id="btn-luz">Litgh Mode</li>
      </ul>
      </nav>

      <div className='title-menu'>
         <img className="imgChapeu" src={ChapeuSeletor}></img>
      <h1>Chapéu Selector</h1>
      <Button></Button>
      </div>

    </div>
  )
}
