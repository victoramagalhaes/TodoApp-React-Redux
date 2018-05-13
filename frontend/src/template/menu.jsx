import React from 'react'
import Logo from "../images/todo.png"
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import About from "../about/about.jsx"
import Todo from "../todo/todo.jsx"

export default props =>(
<Router>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
            <img src={Logo} width="200px" height="60px"></img>
        </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div id="navbarNav" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link">Tarefas</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">Sobre</Link></li>
            </ul>
            </div>
    </nav>
        <div className="container-fluid">
            <Route exact path="/" component={Todo} />
            <Route path="/about" component={About}/>
            <Redirect from="*" to="/"/>
        </div>
    </div>
</Router>
)