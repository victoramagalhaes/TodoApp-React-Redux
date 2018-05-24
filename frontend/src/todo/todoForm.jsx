import React from 'react'
import Grid from '../template/grid.jsx'
import IconButton from '../template/iconButton.jsx'

export default props => {
    const EnterClick = (e) => {
        if (e.key === "Enter"){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === "Escape"){
            props.handleClear()
        }
    }
    
    return (
        <div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" 
                    placeholder="Adicione uma tarefa"
                    onKeyUp={EnterClick}
                    onChange={props.handleChange}
                    value={props.description}></input>
                </Grid>
                
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus' 
                    onClick={props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search' 
                    onClick={props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close' 
                    onClick={props.handleClear}></IconButton>
                </Grid>
            </div>
        </div>
    )
}