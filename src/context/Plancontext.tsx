
import {useState} from 'react'
import React from 'react';
const Playcontext = createContext()
const PlanProvider = ({children}) => {

    const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const sharedata= {
    plan,
    setPlan,
    saved,
    setSaved
  }
    return (
        <div>
          <Playcontext.provider value ={sharedata} >{children}</Playcontext.provider>
        
        </div>
    );
};

export default PlanProvider;