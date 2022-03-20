import React, { useState } from 'react';

const Watch = () => {
    const [step, setStep] = useState(0);
    const run = () => {
        let stepsCount = step + 1;
        setStep(stepsCount);
    }
    return (
        <div>
            <h1>this is the smart wathch</h1>
            <h3>steps walked: {step}</h3>
            <button onClick={run}>run</button>
        </div>
    );
};

export default Watch;