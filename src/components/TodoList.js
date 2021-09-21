import React, { useState } from "react";
import "./TodoList.css";

const TodoList = (props) => {
    const [editableIndex, setEditableIndex] = useState({})
    const handleChange = (e) => {
        setEditableIndex({
            index: parseInt(e.target.id),
            value: e.target.innerHTML || e.target.value

        })
    }
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.handleEdit(editableIndex.index, editableIndex.value)
            setEditableIndex({})
        }
    }
    return (
        <div className="To-do-list">
            {props.listItems.map((value, index) => {
                return (
                    <div className="div-container" key={index}>
                        <input id={index} type="checkbox" onChange={props.handleCheckedItem} checked={props.isChecked}></input>
                        {
                            props.isChecked === true ?
                                <label><s>{value}</s></label> :
                                index === editableIndex.index ?
                                    <input type="text" id={index} value={editableIndex.value} onChange={handleChange} onKeyDown={handleKey} /> :
                                    <label id={index} onClick={handleChange}>{value}</label>}
                    </div>
                )
            })}
        </div>
    )


}
export default TodoList;