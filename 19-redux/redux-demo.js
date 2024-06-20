const redux =require('redux')
const counterReducer=(state={counter:0},action)=>{
    if(action.type==='inc'){
        return{
            counter:state.counter+1
        }
    }else if(action.type==='dec'){
        return{
            counter:state.counter-1
        }
    }else if(action.type==='rset'){
        return{
            counter:0
        }
    }
    return state
}
const store=redux.createStore(counterReducer)
console.log(store.getState())
const counterSubscriber=()=>{
    const latestState=store.getState()
    console.log("func",latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({type:'inc'});
store.dispatch({type:'dec'});
store.dispatch({type:'rset'});