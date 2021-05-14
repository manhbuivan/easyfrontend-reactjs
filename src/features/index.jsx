import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const listPlay = [
        {
            id : 1,
            title : "an"
        },
        {
            id : 2,
            title : "choi"
        },
        {
            id : 3,
            title : "ngu"
        },
        {
            id : 14,
            title : "code"
        },
    ]
    return (
        <div>
            <p>hahaha</p>
            <h2>Manh dep trai</h2>
            <h1>bui van manh</h1>
            <TodoList todoList = {listPlay}/>
        </div>
    );
}

export default TodoFeature;