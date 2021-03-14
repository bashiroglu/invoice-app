import styled from 'styled-components';

export const StyledSidebar = styled.div`
  width: 10.3rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarBg};
  border-radius: 0px 20px 20px 0px;
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2;
  justify-content: space-between;
  .logo {
    position: absolute;
    width: 4rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SidebarTopContainer = styled.div`
  border-radius: 0px 20px 20px 0px;
  width: 100%;
  height: 10.3rem;
  background-color: var(--color-figure-1);
  display: flex;
  align-items: flex-end;
  position: relative;
`;

export const SidebarTopContainerBottomPart = styled.div`
  border-radius: 20px 0px 20px 0px;
  background-color: var(--color-figure-2);
  height: 50%;
  width: 100%;
`;

export const SidebarProfile = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem;
  border-top: 1px solid var(--color-4);
`;

export const ThemeMode = styled.div`
  padding: 3.2rem;
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const SidebarProfileImage = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
`;

export const Icon = styled.img`
  cursor: pointer;
`;
