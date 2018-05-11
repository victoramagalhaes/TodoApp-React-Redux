import React from 'react'
import Logo from "../images/todo.png"
export default props =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
            <img src={Logo} width="200px" height="60px"></img>
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#/todos">Tarefas</a></li>
              <li className="nav-item"><a className="nav-link" href="#/about">Sobre</a></li>
            </ul>
            </div>
    </nav>
)