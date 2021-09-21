import React, { useState } from "react";
import TodoList from './TodoList';
import "./TodoFrom.css";

const TodoFrom = () => {
    const [input, setinput] = useState('');
    const [items, setItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();
    };
    const handleInput = (e) => {
        setinput(e.target.value);

    }
    const handleClick = () => {
        setItems([input, ...items])
    }
    const handleEdit = (index, value) => {
        items[index] = value
        setItems([...items])
    }
    const handleCheckedItem = (e) => {
        if (e.target.checked === true) {
            // 1. Add the element in the checkedItems state
            // 2. Remove the element from the items state
            setCheckedItems([items[e.target.id], ...checkedItems])
            items.splice(e.target.id, 1)
        }
        else {
            // 1. Add the element in the items state
            // 2. Remove the element from the checkedItems state
            setItems([checkedItems[e.target.id], ...items])
            checkedItems.splice(e.target.id, 1)
        }
    }
    console.log("I am rerendering")
    return (
        <div>
            <form className='Todo-from' onSubmit={handleSubmit}>
                <input type='text' placeholder='Add a todo' value={input} name='text' className='Todo-input' onChange={handleInput} />
                <button className='todo-button' onClick={handleClick}>Add todo</button>
            </form>
            <h2>Pending work </h2>

            <TodoList listItems={items} handleCheckedItem={handleCheckedItem} isChecked={false} handleEdit={handleEdit} />
            <h2>Completed work</h2>
            <TodoList handleCheckedItem={handleCheckedItem} listItems={checkedItems} isChecked={true} />
        </div>
    )
}
export default TodoFrom;