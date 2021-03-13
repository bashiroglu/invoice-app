import { Tag as HashTag } from '../common';
import styled from 'styled-components';

const Tag = ({ small, children }) => (
  <Wrapper small={small}>
    <HashTag>#</HashTag>
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  ${({ small }) => small && `font-size: 1.2rem`};
`;

export default Tag;
