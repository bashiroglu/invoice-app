import React from 'react';
import PlusIcon from '../svgs/PlusIcon';
import {
  PlusIconContainer,
  StyledCreateButton,
} from './InvoicesHeader.styles';

function CreateButton(props) {
  return (
    <StyledCreateButton>
      <PlusIconContainer>
        <PlusIcon />
      </PlusIconContainer>
      <span>{props.children}</span>
    </StyledCreateButton>
  );
}

export default CreateButton;
