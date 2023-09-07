import React, { useReducer, useState } from 'react';

const  initialTasks={count:0}
const taskreducer=(task,action)=>{
switch(action.type){
    case 'increament':
        return {count:task.count+1}
        break;

        case 'decreament':
        return {count:task.count - 1}
        break;
        default:
            return task;
}

}



const Reducer = () => {
    const [count,setcount]=useState(0);
    const [task,dispatch]=useReducer(taskreducer, initialTasks);

    return (
        <div>
            <h1>this is reducer{task.count}</h1>
            <button onClick={()=>dispatch({type:'increament'})}>+</button>
            <button onClick={()=>dispatch({type:'decreament'})}>-</button>
        </div>
    );
};

export default Reducer;