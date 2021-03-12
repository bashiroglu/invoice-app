import styled from 'styled-components';

export const Text = styled.p`
  color: rgb(126, 136, 195);
  text-transform: capitalize;
  margin: 1.5rem 0;
  font-weight: 500;
  line-height: 1.6;
  width: ${({ width }) => `${width}rem`};
  ${({ mr }) => mr && `margin-right: ${mr}rem`};
`;
