import React from 'react';
import PropTypes from "prop-types"
const Submit = ({type,content}) => {
    return (
        <button type={type} className=' w-full rounded-lg bg-primary text-white py-3'>
           {content}
        </button>
    );
};
Submit.propTypes={
    type:PropTypes.string,
    content:PropTypes.string
}

export default Submit; 