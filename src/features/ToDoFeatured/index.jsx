import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const inittodoList = [
        {
            id : 1,
            action : "Ăn",
            status : "new"
        },
        {
            id : 2,
            action : "Chơi",
            status : "completed"
        },
        {
            id : 3,
            action : "Ngủ",
            status : "new"
        },
    ]

    
    const [todoList, settodoList] = useState(inittodoList);

    const handleTodoClick = (todo, idx) => {
        // tao mang moi de luu mang tao ra vao
        const newTodolist = [...todoList]
        // toggle state khi bam vao
        newTodolist[idx] = {
            ...newTodolist[idx],
            status : newTodolist[idx].status === "new" ? "completed" : "new",
        }
        // update state
        settodoList(newTodolist)

    }




    return (
        <div>
            <h2> hello</h2>
            <TodoList todoList = {todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;