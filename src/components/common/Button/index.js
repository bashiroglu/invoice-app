import styled from 'styled-components';

export const Button = styled.button`
  font-family: inherit;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1.6rem 2.3rem;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 24px;
  cursor: pointer;
  transition: var(--transition);
  user-select: none;

  &:is(:active, :focus) {
    outline: 1px dashed ${({ theme }) => theme.outlineColor};
    outline-offset: 1px;
  }

  ${({ mr }) => mr && `margin-right: ${mr}rem`};

  ${({ second }) =>
    second &&
    `
		background: var(--color-figure-1);

		&:hover {
			background: var(--color-figure-2);
		};
	`};

  ${({ third }) =>
    third &&
    `
		background: #F9FAFE;
		color: var(--color-figure-3);

		&:hover {
			background: #DFE3FA;
		};
	`};

  ${({ fourth }) =>
    fourth &&
    `
		background: #373B53;
		color: var(--color-gray-2);

		&:hover {
			background: #0C0E16;
		};
	`};

  ${({ fifth }) =>
    fifth &&
    `
		background: #ec5757;

    &:hover {
      background: #FF9797;
    }
	`};

  ${({ sixth }) =>
    sixth &&
    `
		width: fill-available;
		background: #F9FAFE;
		color: var(--color-figure-3);

		&:hover {
		background: #DFE3FA;
		};
	`};
`;
