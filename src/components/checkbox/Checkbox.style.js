import styled from 'styled-components';

export const Wrapper = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5rem;
  font-size: 1.5rem;
`;

export const CheckboxInput = styled.span`
  display: grid;
  grid-template-areas: 'checkbox';

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    width: 1rem;
    height: 1rem;

    &:focus + .checkbox__control {
      box-shadow: 0 0 0 0.05rem #fff, 0 0 0.15rem 0.1rem currentColor;
    }

    &:checked + .checkbox__control svg {
      transform: scale(1);
    }
  }
`;

export const CheckboxControl = styled.span`
  display: inline-grid;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.3rem;
  border: 0.2rem solid ${({ theme }) => theme.checkbox.border.color};

  svg {
    transition: var(--transition);
    transform: scale(0);
  }
`;
