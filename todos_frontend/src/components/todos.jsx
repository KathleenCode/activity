import PropTypes from 'prop-types';
import Todo from "./todo";
export default function Todos(props) {
    console.log("props from Todos component ---", props);
    return (
        <>
        {props.todos.map((todo) => (
         <Todo todo = {todo} key={todo._id} handleDelete = {props.handleDelete} handleUpdate={props.handleUpdate}/>
        ))}
       </>
    )
}

Todos.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func,
    handleUpdate: PropTypes.func,
};