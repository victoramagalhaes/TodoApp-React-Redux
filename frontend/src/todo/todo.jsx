import React, { Component } from 'react'
import PageHeader from '../template/pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: "", list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    
    handleChange(e){
        this.setState({description: e.target.value})
    }

    handleAdd(){
        console.log(this.state.description)
    }
    
    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
                
        )
    }

}