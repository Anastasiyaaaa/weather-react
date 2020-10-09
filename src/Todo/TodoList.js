import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem';

const styles = {
    ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    li: {
        color: 'red'
    }
};

 function TodoList(props) {
    return(
        <ul style={styles.ul}>
            {
                props.todos.map( (todo, i )=> {
                return <TodoItem todo={todo} key={todo.id} index={i} onChange={props.onToggle}/>
                })
            }
        </ul>
    )
}
TodoList.propTypes = {
     todos: PropTypes.arrayOf(PropTypes.object).isRequired, //массив из объектов + обязательный
     onToggle: PropTypes.func.isRequired
};
export default TodoList