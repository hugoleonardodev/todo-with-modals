import styled, { keyframes } from 'styled-components';

const rightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 30vh;
  left: 25%;
  width: 50%;
  z-index: 100;
  overflow: hidden;
  border-radius: 8px;
  animation: ${rightToLeft} 0.8s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  animation: ${fadeIn} 0.8s;
`;

export const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
`;

export const Body = styled.section`
  background: ${(props) => props.theme.colors.background};
  padding: 1rem;
`;

export const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  background: #4f005f;
`;

export const Title = styled.h2`
  color: #ffffff;
  margin: 0;
`;

export const Message = styled.p`
  color: #000000;
`;

export const Span = styled.span`
  color: #000000;
`;

export const Icon = styled.span`
  font-family: 'Material Icons';
  font-size: 24px;
`;

export const Action = styled.span`
  font-size: 24px;
  color: #ffffff;
`;
