import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment} from '../actions/templateActions'

class Classes extends Component {
  render() {
    return (
      <>
        <h1>Classes</h1>
        <h2>{this.props.count}</h2>
        <button onClick={()=>this.props.increment(5)}>Click Me</button>
      </>
    )
  }
}

//connect takes 2 functions
//1st: pulling down state
//2nd: for updating state

const mapStateToProps = (state) =>{
    return {
        count: state.counter
    }
}

// increment is a prop: this.props.increment(n)
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (n)=>dispatch(increment(n)) //callback accepts param and passis it to dispatch function
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Classes);
