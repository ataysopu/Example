import React from 'react';
import {MyBtn} from "./styled";

const MyButton = ({children, ...props}) => {
    return (
        <MyBtn {...props}>{children}</MyBtn>
    );
};

export default MyButton;