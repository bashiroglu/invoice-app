import styled from 'styled-components';

export const Container = styled.div`
  width: 10.5rem;
  text-align: center;
  padding: 1.3rem 0;
  background: ${({ color }) => `rgba(${color}, 0.15)`};
  border-radius: 6px;
  font-weight: bold;
  text-transform: capitalize;

  span {
    font-size: 12px;
    position: relative;
    margin-right: -1.3rem;
    color: ${({ color }) => `rgb(${color})`};

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      left: -1.6rem;
      top: 1px;
      background: ${({ color }) => `rgb(${color})`};
    }
  }
`;
