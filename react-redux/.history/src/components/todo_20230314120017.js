import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, deleteAllTodo } from '../actions/index';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducer.list);
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
            <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
          </div>
          <div className='showItems'>
            {
                list.map((e) => {
                    return (
                        <div className='eachItem' key={e.id}>
                            <h3>{e.data}</h3>
                            <div className='todo-btn'>
                                <i className='fa fa-trash-alt add-btn' title='Delete Item' 
                                    onClick={() => dispatch(deleteTodo(e.id))}
                                ></i>
                            </div>
                        </div>
                    )
                })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo
