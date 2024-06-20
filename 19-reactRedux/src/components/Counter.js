import { useDispatch, useSelector,/* connect */ } from 'react-redux';
import classes from './Counter.module.css';
import {counterAction} from '../store/counter-slice'
//import { Component } from 'react';

const Counter = () => {
  const dispatch=useDispatch();
  const count=useSelector(state=>state.county.counter)
  const toggle=useSelector(state=>state.county.showCounter)
  console.log(count);
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };
  const inc=()=>{
    dispatch(counterAction.inc())
  }
  const dec=()=>{
    dispatch(counterAction.dec())
  } 
  const increase=()=>{
    dispatch(counterAction.increase(10)); //{type:'unique',payload}
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle&&<div className={classes.value}>{count}</div>}
      <div>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={increase}>increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
/* class Counters extends Component{
  inc(){
    this.props.inc()
  }
  dec(){
    this.props.dec()
  }
  toggleCounterHandler(){

  }
  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.inc.bind(this)}>inc</button>
          <button onClick={this.dec.bind(this)}>dec</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
} */
export default Counter;
/* const mapStateToProps=state=>{
  return{
    counter:state.counter
  }
}
const mapDispathcToprops=dispatch=>{
  return{
    inc:()=>dispatch({type:'inc'}),
    dec:()=>dispatch({type:'dec'})
  }
}
export default connect(mapStateToProps,mapDispathcToprops)(Counters); */
