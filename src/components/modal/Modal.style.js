import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
`;

export const Popup = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 4.8rem;
  background: #fff;
  max-width: 50rem;
  transition: var(--transition);
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.label};
  text-transform: capitalize;
  margin: 1.5rem 0;
  font-weight: 500;
  line-height: 1.6;
  width: ${({ width }) => `${width}rem`};
  ${({ mr }) => mr && `margin-right: ${mr}rem`};

  font-size: 12px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;
