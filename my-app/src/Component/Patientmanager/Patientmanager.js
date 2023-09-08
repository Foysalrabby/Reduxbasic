import React, { useReducer, useRef } from 'react';
import { initialTasks, patienttask } from '../PatientReducer/Patientreducer';

const Patientmanager = () => {
    const [state, dispatch] = useReducer(patienttask,initialTasks);
    const nameref=useRef();
    const handlesubmit=(event)=>{
        event.preventDefault();

        dispatch({type:'addpatient',
        name:nameref.current.value,
        id:state.patient.length
    })
    //console.log(nameref.current.value);
    nameref.current.value='';

    }
    return (
        <div>
            <h1> this is patient manager page{state.patient.length}</h1>

            <form onSubmit={handlesubmit}>
           <input ref={nameref} ></input>

            </form>

            {

                state.patient.map(pt => <li key={pt.id}
                onClick={()=>dispatch({type:'removepatient',
                id:pt.id
                })}
                >{pt.name}</li> )
            }
        </div>
    );
};

export default Patientmanager;