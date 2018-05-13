import "../scss/main.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/font-awesome/scss/font-awesome.scss"

import React from "react"
import Todo from "../todo/todo.jsx"
import About from "../about/about.jsx"
import Menu from "../template/menu.jsx"

export default props => (
    <div className="container-fluid nopadding">
        <div>
        <Menu/>
        </div>
            <div className="container-fluid">
            <Todo />
            <About />
            </div>
    </div>
)