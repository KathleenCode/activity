import PropTypes from 'prop-types';
import Style from '../App.module.css';
import TodoStyles from './todo.module.css';
export default function Todo(props) {
    return (
        // <div className={Style.who}></div>
        <div className={TodoStyles.todo} 
        style={
            props.todo.completed
             ? {backgroundColor: "#FFD3A3", textDecoration: "line-through"} 
             : {backgroundColor: "#5C469C"}
             }
             >
            <p className={Style.par}>{props.todo.chore}</p>
            <div>
            <button className={TodoStyles.btn} onClick={() => props.handleUpdate(props.todo._id)}>
                {
                    props.todo.completed === true ? "completed" : "pending"
                }
            </button>
            <button className={TodoStyles.delbtn} onClick={() => props.handleDelete(props.todo._id)}>delete</button>
            </div>
        </div>
    )
}

Todo.propTypes = {
    // todo: PropTypes.object,
    todo: PropTypes.shape({
        _id: PropTypes.string,
        chore: PropTypes.string,
        completed: PropTypes.bool.isRequired,
    }),
    handleUpdate: PropTypes.func,
    handleDelete: PropTypes.func,
}
