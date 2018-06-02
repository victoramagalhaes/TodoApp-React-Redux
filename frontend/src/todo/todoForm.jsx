import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid.jsx'
import IconButton from '../template/iconButton.jsx'
import { add, changeDescription, search } from './todoAction.js'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.EnterClick = this.EnterClick.bind(this)
    }
    componentWillMount(){
        this.props.search()
    }
    EnterClick(e){
        const { add, search, description } = this.props
        if (e.key === "Enter"){
            e.shiftKey ? search() : add(description)
        }
        else if (e.key === "Escape"){
            props.handleClear()
        }
    }
    render(){
        const { add, search, description } = this.props
        return (
            <div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onKeyUp={this.EnterClick}
                    onChange={this.props.changeDescription}
                    value={this.description}></input>
                </Grid>
                
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' 
                    onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' 
                    onClick={() => search()}></IconButton>
                    <IconButton style='default' icon='close' 
                    onClick={this.handleClear}></IconButton>
                </Grid>
            </div>
        </div>
        )
    }
}

const MapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(MapStateToProps,mapDispatchToProps)(TodoForm)