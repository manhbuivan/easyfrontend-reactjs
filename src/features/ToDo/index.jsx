import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id : 1,
            action : "Ăn"
        },
        {
            id : 2,
            action : "Chơi"
        },
        {
            id : 3,
            action : "Ngủ"
        },
    ]
    return (
        <div>
            <TodoList todoList = {todoList}/>
        </div>
    );
}

export default TodoFeature;