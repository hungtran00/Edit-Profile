import React from 'react';
import '../Header/Edit/Edit.css'
const Input = (props) => {
    const {abe, data, setData,classStyle,inputType} = props;
    return (
        <div className='input-container'>
            <p>{abe}</p>
            {inputType === "textarea" ? (
                <textarea className={classStyle} type='text' placeholder={data} onChange={(e)=>setData(e.target.value)}/>
            ) : 
            (
                <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
            )}
        </div>
    );
};

export default Input;