import React from 'react';
import {MyLoader, Text, Wrapper} from "./styled";

const Loader = () => {
    return (
        <Wrapper>
            <MyLoader>
                <Text>Загрузка</Text>
            </MyLoader>
        </Wrapper>
    );
};

export default Loader;