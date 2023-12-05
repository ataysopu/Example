import React from 'react';
import {MyInpt} from "./styled";

const MyInput = ({children, ...props}) => {
    return (
        <MyInpt {...props}/>
    );
};

export default MyInput;