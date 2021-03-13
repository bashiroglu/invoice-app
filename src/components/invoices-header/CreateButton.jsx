import {
  PlusIconContainer,
  StyledCreateButton,
} from './InvoicesHeader.styles';

import PlusIcon from '../svgs/PlusIcon';

function CreateButton({ children }) {
  return (
    <StyledCreateButton>
      <PlusIconContainer>
        <PlusIcon />
      </PlusIconContainer>
      <span>{children}</span>
    </StyledCreateButton>
  );
}

export default CreateButton;
