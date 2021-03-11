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

  ${({ primary }) =>
    primary &&
    `
		background: var(--color-figure-1);

		&:hover {
			background: var(--color-figure-2);
		};
	`};

  ${({ edit }) =>
    edit &&
    `
		background: #F9FAFE;
		color: var(--color-figure-3);

		&:hover {
			background: #DFE3FA;
		};
	`};

  ${({ saveDraft }) =>
    saveDraft &&
    `
		background: #373B53;
		color: var(--color-gray-2);

		&:hover {
			background: #0C0E16;
		};
	`};

  ${({ remove }) =>
    remove &&
    `
		background: #ec5757;
	`};

  ${({ newItem }) =>
    newItem &&
    `
		width: fill-available;
		background: #F9FAFE;
		color: var(--color-figure-3);

		&:hover {
		background: #DFE3FA;
		};
	`};

  ${({ mr }) => mr && `margin-right: ${mr}rem`};
`;
