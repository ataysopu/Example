import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ItemEnter = styled.div`
  animation: ${fadeIn} 500ms ease-in;
`;

const ItemExit = styled.div`
  animation: ${fadeOut} 500ms ease-in;
`;