import React from 'react';
import {Container, Content, Wrapper} from "./styled";

const MyModal = ({children, visible, setVisible}) => {
    return (
        <Wrapper style={{display: visible ? 'flex' : 'none'}} onClick={() => setVisible(false)}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Content>
                    {children}
                </Content>
            </Container>
        </Wrapper>
    );
};

export default MyModal;