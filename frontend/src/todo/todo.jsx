import React, { Component } from 'react'
import PageHeader from '../template/pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: "", list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
    }
    
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
        .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
        .then(resp => this.refresh())
    }
    
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list} />
            </div>
                
        )
    }

}