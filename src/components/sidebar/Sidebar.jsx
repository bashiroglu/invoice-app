import React from 'react';
import ProfileImg from '../../assets/image-avatar.jpg';
import LogoImg from '../../assets/logo.svg';
import MoonIcon from '../../assets/icon-moon.svg';
import {
  StyledSidebar,
  SidebarTopContainer,
  SidebarTopContainerBottomPart,
  SidebarProfile,
  SidebarProfileImage,
  ThemeMode,
} from './Sidebar.styles';

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarTopContainer>
        <img src={LogoImg} alt="invoice logo" className="logo" />
        <SidebarTopContainerBottomPart></SidebarTopContainerBottomPart>
      </SidebarTopContainer>

      <ThemeMode>
        <img src={MoonIcon} alt="dark icon" />
      </ThemeMode>
      <SidebarProfile>
        <SidebarProfileImage src={ProfileImg} alt="avatar" />
      </SidebarProfile>
    </StyledSidebar>
  );
}

export default Sidebar;
