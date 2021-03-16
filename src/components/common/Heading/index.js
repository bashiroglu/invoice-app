import styled from 'styled-components';

export const Heading = styled.h2`
  color: ${({ theme }) => theme.text};
  ${({ mt }) => mt && `margin-top: ${mt}rem`};
  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`};
  ${({ color }) => color && `color: ${color}`};
  ${({ invoice }) => invoice && `font-size: 3.2rem`};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}rem`};
`;
