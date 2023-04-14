import React, { useState } from 'react';
import PropTypes from "prop-types"
const CheckBox = ({on=false, onClick=()=>{},onChange=()=>{}}) => {
    return (
        <label className='relative w-5 h-5 inline-block flex-grow flex-shrink-0 basis-5 '>
            <input type='checkbox w-full h-full' checked={on} className='hidden' onClick={onClick} onChange={onChange}></input>
            <div className={` w-full h-full rounded-sm flex items-center justify-center transition-all  absolute top-0 left-0 ${on?"bg-primary":"bg-inherit border border-solid border-strock dark:border-darkStroke"}`}>
                <img className={on?"":'hidden'} src="./Vector 10.png" alt="" />
            </div>
        </label>
    );
};
CheckBox.propTypes={
    on:PropTypes.bool,
    onClick:PropTypes.func
}

export default CheckBox;