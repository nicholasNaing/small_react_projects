import { useContext, useMemo, useReducer, useRef } from "react";
import React from 'react';
import { styleContext } from "../App";

function Todo() {
    // Reducer function to manage state changes
    const reducer = (state, action) => {
        switch (action.type) {
            case 'input':
                console.log("input is working");
                // Update the input value in state
                return [{ item: action.payload }, state[1]];
            case 'list':
                console.log("list is working");
                // Add a new item to the list
                return [state[0], { listItem: [state[0].item, ...state[1].listItem] }];
            case 'filteredArray':
                // Filter the list based on search criteria
                return [state[0], { listItem: action.payload }];
            case 'cleanItem':
                // Clear the input field
                return [{ item: '' }, state[1]];
            default:
                return state;
        }
    }

    // Initial state for the todo list
    const initialState = [{ item: '' }, { listItem: [] }];
    const [state, dispatch] = useReducer(reducer, initialState);

    // Access the style context for styling
    const [style, setStyle] = useContext(styleContext);

    // Create a ref for todo items
    const todoItem = useRef([]);
    const ref = React.createRef();

    // Handle input changes
    const handleChange = (e) => {
        // Dispatch an action to update the input field value
        dispatch({ type: 'input', payload: e.target.value });
    }

    // Handle adding an item to the list
    const addList = () => {
        if (state[0].item) {
            if(!state[1].listItem.includes(state[0].item)){
                // Dispatch actions to add a new item and clear the input field
                dispatch({ type: 'list' });
                dispatch({ type: 'cleanItem' });
            }else{
                alert("Your task is already in the list")
            }
        } else{
            alert("Input Something First!")
        }
    }

    // Handle item deletion
    const handleDelete = (deleteTodo) => {
        const deletedArray = state[1].listItem.filter((i) => deleteTodo !== i);
        // Dispatch an action to update the list with the deleted item removed
        dispatch({ type: 'filteredArray', payload: deletedArray });
    }

    return (
        <div className="todoContainer" style={{ color: style.textColor, boxShadow: `3px 3px 15px ${style.linearColor2}` }}>
            <div className="searchBar">
                <input id="item" value={state[0].item} onChange={handleChange} placeholder="search" />
                <button onClick={addList} style={{ color: style.textColor }}>Add</button>
            </div>
            <h2 className="todoTitle">Your Todo List</h2>
            <div className="listItemsContainer" style={{ boxShadow: `5px 3px 10px ${style.linearColor1}` }}>
                {
                    state[1].listItem.length > 0 ?
                        state[0].item ?
                            state[1].listItem.filter((filteredItem) =>
                                filteredItem.toLowerCase()
                                    .includes(state[0].item.toLowerCase())
                            ).map((filteredItem, index) => {
                                return (
                                    <div className="todo-item" key={index}>
                                        <div>{filteredItem}</div>
                                        <div id="delete" onClick={() => handleDelete(filteredItem)}>delete</div>
                                    </div>
                                )
                            })
                            :
                            state[1].listItem.map((todo, index) => {
                                todoItem.current[todo] = ref;
                                return (
                                    <div className="todo-item" key={index}>
                                        <div ref={ref}>{todo}</div>
                                        <div id="delete" onClick={() => handleDelete(todo)}>delete</div>
                                    </div>
                                )
                            })
                        : <h3>The list is empty</h3>
                }
            </div>
        </div>
    );
}

export default Todo;