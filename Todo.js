import React from 'react'

function Todo(props) {
    return (
        <div>
            <input type="checkbox" id="todo"/>
            <lable for="todo">{props.todo_item}</lable>
        </div>
    )
}

export default Todo
