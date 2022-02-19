import React, { useState } from "react"
import CountTodo from './CountTodo'

const Todo = (props) => {
    const [textValue, setTextValue] = useState("")
    const [listTodo, setListTodo] = useState([]);

    const onCLickAddTodo = () => {
        if (textValue)
            setListTodo([...listTodo, { name: textValue, completed: false }])
        setTextValue("")
    }

    const onClickTodo = (index, status) => {
        let existingData = [...listTodo]
        existingData.forEach((item, i) => {
            if (index === i) return item.completed = !status
            else return item
        })
        setListTodo(existingData)
    }

    const reducedValue = React.useMemo(() => {
        let completedCount = listTodo.filter((item) => {
            return item.completed
        })
        return completedCount.length
    },
        [listTodo]
    )
    return (
        <>
            
                <h1 title="header" data-testid="header-1">
                {props.titleName}
                </h1>
                <h1>
                STatic text
                </h1>
                <input placeholder="input todo" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                <button onClick={() => onCLickAddTodo()}>Add</button>
                <br />
                total items {listTodo.length}
                <br />
                <CountTodo todoCount={reducedValue}/>

                <ul>
                    {listTodo.map((item, index) => (
                        // <li data-testid="liID" onClick={() => onClickTodo(index, item.completed)} style={item.completed ? { textDecoration: "line-through" } : {}} key={index}>  {item.name}</li>
                        <li data-testid="liID" onClick={() => onClickTodo(index, item.completed)} className = {item.completed ? "completed-todo":"pending-todo"}key={index}>  {item.name}</li>
                    ))}
                </ul>
            
        </>
    )
}

export default Todo;