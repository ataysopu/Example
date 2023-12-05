import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const MyLoader = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed teal;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 1s infinite linear;
`;

export const Text = styled.div`
`;

