export const initialTasks={
    patient :[]
}
export const patienttask=(state,action)=>{
 switch(action.type){
case 'addpatient':
    const newstate={
    
        id:action.id,
        name:action.name
    }
    const allnewsate=[...state.patient,newstate];
    return {patient:allnewsate};
    break;
case 'removepatient':
    console.log(action);
    const remaingperson=state.patient.filter(pt=>pt.id !== action.id);
    const newpersonlist={patient:remaingperson};
    return newpersonlist;
    break;
    default:
        return state;

 }
}