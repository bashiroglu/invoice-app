import {
  PlusIconContainer,
  StyledCreateButton,
} from './InvoicesHeader.styles';

import PlusIcon from '../svgs/PlusIcon';

function CreateButton({ children, ...props }) {
  return (
    <StyledCreateButton {...props}>
      <PlusIconContainer>
        <PlusIcon />
      </PlusIconContainer>
      <span>{children}</span>
    </StyledCreateButton>
  );
}

export default CreateButton;
