// src/components/Header/styledComponents.js

import styled from 'styled-components'

export const NavHeader = styled.nav`
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavContent = styled.div`
  width: 90%;
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  height: 30px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 20px;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 20px;
`

export const LogoutButton = styled.button`
  border: 1px solid ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 576px) {
    display: none;
  }

  color: ${props => (props.dark ? '#ffffff' : '#000000')};
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.dark ? '#181818' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 300px;
  text-align: center;
`

export const PopupText = styled.p`
  font-size: 16px;
  color: ${props => (props.dark ? '#ffffff' : '#00306e')};
  margin-bottom: 20px;
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CancelButton = styled.button`
  background-color: transparent;
  color: #7e858e;
  border: 1px solid #7e858e;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`
