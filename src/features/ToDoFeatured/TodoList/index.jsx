import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import "./styles.scss";
TodoList.propTypes = {
    todoList : PropTypes.array,
    onClick : PropTypes.func,
};
TodoList.defaultProps = {
    todoList : [],
    onClick : null,
}

function TodoList({todoList, onTodoClick}) {

    const handleClick = (todo, idx) => {
        if(!onTodoClick) return;
          
        onTodoClick(todo, idx);
    }
         
          
    
    return (
        <div>
            <ul className="todo-list">
               {todoList.map((todo, idx) => (
                   <li
                    key = {todo.id}
                    className={classnames({
                        'todo-item' : true,
                        completed : todo.status === 'completed'
                    })}
                    onClick={() => handleClick(todo, idx)}
                    >
                       {todo.action}
                   </li>
               ))} 
            </ul>
        </div>
    );
}

export default TodoList;