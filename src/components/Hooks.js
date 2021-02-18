import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment} from '../actions/templateActions'

const Hooks = () => {

    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

  return (
    <>
      Hooks
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment(4))}>Click Me</button>
    </>
  )
}

export default Hooks
