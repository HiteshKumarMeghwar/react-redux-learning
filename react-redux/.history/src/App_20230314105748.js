import React from 'react'
import Todo from './components/Todo';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber, multNumber, divNumber} from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState2 = useSelector((state) => state.mulDivTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h1>Using React and Redux</h1>

        <div className='quantity'>
          <a className='quantity_minus' title='Decrement'
            onClick={() => dispatch(decNumber())}
          ><span>-</span></a>
          <input name='quantity' type='text' className='quantity_input' value={myState} />
          <a className='quantity_plus' title='Increment'
            onClick={() => dispatch(incNumber())}
          ><span>+</span></a>
        </div>
      </div>
      <div className='container my-3'>
        <h1>Multiplication/Division counter</h1>
        <h1>Using React and Redux</h1>

        <div className='quantity'>
          <a className='quantity_minus' title='Decrement'
            onClick={() => dispatch(multNumber(5))}
          ><span>*</span></a>
          <input name='quantity' type='text' className='quantity_input' value={myState2} />
          <a className='quantity_plus' title='Increment'
            onClick={() => dispatch(divNumber())}
          ><span>/</span></a>
        </div>
      </div>

      <Todo />
    </>
  )
}

export default App
