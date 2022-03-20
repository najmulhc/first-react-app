import React, { useState } from 'react';
import Cap from '../Cap/Cap';

const Watch = () => {
    const [step, setStep] = useState(0);

    const run = () => {
        let stepsCount = step + 1;
        setStep(stepsCount);
    }
    const reset = () =>{
        setStep(0);
    }
    return (
        <div>
            <h1>this is the smart wathch</h1>
           
            <button onClick={run}>run</button><br />

            <button onClick={reset}>reset</button>
            {/* sending data to another component using props */}
            <Cap steps={step}></Cap>
        </div>
    );
};

export default Watch;