import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.3rem 2.5rem;
  background: ${({ state }) => `rgba(${state}, 0.3)`};
  font-weight: bold;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 6px;
  position: relative;

  &::before {
    content: '';
    background-color: ${({ state }) => `rgb(${state})`};
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 2rem;
    width: 8px;
    height: 8px;
    transform: translate(0, -50%);
  }
`;

export const Text = styled.p`
  color: ${({ state }) => `rgb(${state})`};
  text-transform: capitalize;
  text-indent: 1rem;
`;
