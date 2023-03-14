import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, deleteAllTodo } from '../actions/index';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className='addItems'>
            <input type="text" placeholder='Add Items.. ' 
                value={inputData} 
                onChange={(e) => setInputData(e.target.value)} 
            />
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(addTodo))}></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
