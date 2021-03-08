import styled from 'styled-components';

export const Container = styled.aside`
  padding: 5rem;
  margin-left: 10rem;
  height: 100vh;
  width: max-content;
  overflow: hidden;
`;

export const Form = styled.form`
  overflow: hidden scroll;
  height: 100%;
  padding: 0 3rem 3rem 0;

  /* https://i2.wp.com/css-tricks.com/wp-content/uploads/2011/05/scrollbarparts.png?w=570&ssl=1 */

  &::-webkit-scrollbar {
    width: 8px;
    /* 1 */
  }

  &::-webkit-scrollbar-button {
    /* 2 */
  }

  &::-webkit-scrollbar-track {
    /* 3 */
  }

  &::-webkit-scrollbar-track-piece {
    /* 4 */
  }

  &::-webkit-scrollbar-thumb {
    /* 5 */
    border-radius: 4px;
    background: rgb(223, 227, 250);
  }

  &::-webkit-scrollbar-corner {
    /* 6 */
  }

  &::-webkit-resizer {
    /* 7 */
  }
`;

export const BillToFrom = styled.p`
  color: var(--color-figure-1);
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const InvoiceID = styled.span`
  display: inline-block;

  &::first-letter {
    color: rgb(136, 142, 176);
  }
`;

export const Text = styled.p`
  color: rgb(126, 136, 195);
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.6;
`;

export const Input = styled.input`
  min-height: 5rem;
  width: ${({ large }) => (large ? '50rem' : '15rem')};
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  text-transform: ${({ postCode }) => postCode && 'uppercase'};
  margin-bottom: 2rem;
  transition: 0.1s all ease-in-out;

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }

  ${({ mr }) =>
    mr &&
    `
    margin-right: 2.5rem
  `};

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
`;

export const Select = styled.select`
  min-height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  transition: 0.1s all ease-in-out;

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }
`;
