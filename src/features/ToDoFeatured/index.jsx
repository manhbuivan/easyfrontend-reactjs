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
            status : "new",
            name : "Vi"
        },
        {
            id : 2,
            action : "Chơi",
            status : "completed",
            name : "Manh"
        },
        {
            id : 3,
            action : "Ngủ",
            status : "new",
            name : "Vi"
        },
    ]

    
    const [todoList, settodoList] = useState(inittodoList);
    const [showListTodo, setshowListTodo] = useState('new')


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


    const handledShowAllClick = () => {
        setshowListTodo('all');
    }
    const handledShowNewClick = () => {
        setshowListTodo('new');
    }
    const handledShowCompletedClick = () => {
        setshowListTodo('completed');
    }

    const renderListTodo = todoList.filter(todo => showListTodo === 'all' || showListTodo === todo.status)


    return (
        <div>
            <h2> Hello, I'm Mạnh đẹp trai</h2>
            <TodoList todoList = {renderListTodo} onTodoClick={handleTodoClick}/>

            <button onClick={handledShowAllClick}>Show All</button>
            <button onClick={handledShowNewClick}>Show New</button>
            <button onClick={handledShowCompletedClick}>Show Completed</button>
        </div>
    );
}

export default TodoFeature;