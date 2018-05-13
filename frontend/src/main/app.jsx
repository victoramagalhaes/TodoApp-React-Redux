import "../scss/main.scss"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/font-awesome/scss/font-awesome.scss"

import React from "react"
import Todo from "../todo/todo.jsx"
import About from "../about/about.jsx"
import Menu from "../template/menu.jsx"
import Rotas from "./routes.jsx"

export default props => (
    <div className="container-fluid nopadding">
        <Menu/>
     </div>
)