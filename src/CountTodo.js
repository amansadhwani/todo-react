const CountTodo = (props) => {

    return (
        <h3  style={{opacity:1}} data-testid="count-1">
            {props.todoCount}  {props.todoCount === 0 || props.todoCount=== 1 ? "todo" : "todos"} completed</h3>
    )
}

export default CountTodo;