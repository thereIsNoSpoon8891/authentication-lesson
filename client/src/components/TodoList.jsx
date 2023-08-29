import Todo from "./Todo"



const TodoList = (props) => {

    const {todos} = props
    return(
        <div className="todo--container">
            {todos.map(todo => <Todo {...todo} key={todo._id}/>)}
        </div>
    )
}

export default TodoList