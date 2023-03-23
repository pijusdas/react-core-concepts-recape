import React, { useState } from 'react';

const Mobile = () => {
    const [count, setCount] = useState(100);
    const Increase = ()=>{
            setCount(count-10);
            if(count === 0){
                setCount(0);
            }
    } 
    const styelsText ={
        backgroundColor: 'red',
        padding:'20px',
    }
    return (
        <div>
            <h1 style={styelsText}>Battery Charges Remainig:{count}%</h1>
            <button style={{backgroundColor:'skyblue', padding:'5px',borderRadius:'15px'}} onClick={Increase}>Battery Down</button>
        </div>
    );
};

export default Mobile;