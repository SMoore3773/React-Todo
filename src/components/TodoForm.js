import React from 'react';
class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            toDoName:''
        };
    }

    handleChanges = e => {
        this.setState({toDoName: e.target.value})
        
    };
    handleAddToDo = e =>{
        e.preventdefault();
        this.props.addToDo(this.state.toDoName);
       
    }
    
    render(){
        return(
            <form onSubmit={this.handleAddToDo}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.toDoName}
                    onChange={this.handleChanges}
                />
                <button>Add ToDo</button>
            </form>
        )
    }
}
export default TodoForm;