import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
