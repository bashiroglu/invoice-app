import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({ theme }) => theme.drawerBg};
  padding: 5rem;
  padding-left: 6rem;
  margin-left: 9rem;
  height: 100vh;
  width: max-content;
  overflow: hidden;
  border-radius: 0 2rem 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  transition: var(--transition);
`;

export const Form = styled.form`
  overflow: hidden scroll;
  height: 100%;
  padding: 0 5rem 3rem 0;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${({ theme }) => theme.scrollbarColor};
    transition: var(--transition);

    &:active {
      background: rgb(228, 234, 246);
    }
  }
`;

export const BillToFrom = styled.p`
  color: var(--color-figure-1);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.formInputBg};
  color: ${({ theme }) => theme.text};
  min-height: 5rem;
  width: ${({ large }) => (large ? '50rem' : '15rem')};
  border-radius: 4px;
  border: ${({ theme }) => theme.formInputBorderInactive};
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  text-transform: ${({ postCode }) => postCode && 'uppercase'};
  transition: var(--transition);

  &:is(:active, :focus) {
    border: ${({ theme }) => theme.formInputBorderActive};
  }

  ${({ mr }) => mr && `margin-right: 2.5rem;`};

  ${({ half }) =>
    half &&
    `
    width: 24rem;
    margin-right: 2rem;
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`};
`;

export const Select = styled.select`
  background: ${({ theme }) => theme.formInputBg};
  color: ${({ theme }) => theme.text};
  min-height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  background: #fff;
  transition: var(--transition);

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }
`;

export const DateInput = styled(Input)`
  text-indent: 1rem;
`;

export const ItemInputs = styled(Input)`
  width: ${({ width }) => `${width}rem`};
  ${({ qty }) =>
    qty &&
    `
    text-indent: 1.5rem;
    text-align: center;
  `};
  ${({ mr }) => mr && `margin-right: ${mr}rem`};
`;

export const IconContainer = styled.div`
  margin-left: ${({ ml }) => `${ml}rem`};
`;

export const Sum = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #888eb0;
  text-indent: 0.3rem;
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 4rem 0 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
