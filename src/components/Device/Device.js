import React from 'react';
import DeviceDetail from '../DeviceDetail/DeviceDetail';

const Device = (props) => {
    return (
        <div>
            <h1>I have: {props.name}</h1>
            {/* calling another component inside a component */}
            <DeviceDetail  price={props.price}/>
        </div>
    );
};

export default Device;