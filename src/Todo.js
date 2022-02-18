import React, { useState } from "react"


const Todo = () => {
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
            <h2>
                Todo
                <input value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                <button onClick={() => onCLickAddTodo()}>Add</button>
                <br />
                total items {listTodo.length}
                <br />
                total completed itemss {reducedValue}

                <ul>
                    {listTodo.map((item, index) => (
                        <li onClick={() => onClickTodo(index, item.completed)} style={item.completed ? { textDecoration: "line-through" } : {}} key={index}>  {item.name}</li>
                    ))}
                </ul>
            </h2>
        </>
    )
}

export default Todo;