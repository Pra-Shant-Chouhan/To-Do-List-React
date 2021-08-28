import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let style = {
        margin: "3% Auto",
        backgroundColor: '#b0eb6b'
        
    }
    return (
        <div className="container " style={style}>
            <h3 className=" my-3"> Todos List </h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    // console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    )
                })
            }

        </div>
    )
}
