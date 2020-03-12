import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
const toDos = [{name:'eat', id:"01"}, {name:'sleep', id:"02"}];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    
  constructor() {
      super();
      this.state ={
        toDos: toDos
      }
    }
  addToDo = toDoName =>{
    this.setState({
      toDos: [...this.state.toDos, {name:toDoName, id:Date.now() }]
    })
    console.log(toDos)
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!!</h2>
        <TodoForm 
        addToDo={this.addToDo}
        />
        <TodoList
          todos={this.state.toDos}
        />
      </div>
    );
  }
}

export default App;
