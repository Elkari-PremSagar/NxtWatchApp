// Sidebar/styledComponents.js
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 250px;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SidebarItemsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: ${props => (props.active ? '#d7dfe9' : 'transparent')};
  background-color: ${props =>
    props.isDarkTheme && props.active ? '#383838' : 'transparent'};
`

export const SidebarLinkText = styled.p`
  font-size: 16px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-left: 16px;
`

export const ContactUsContainer = styled.div`
  padding: 20px;
`

export const ContactUsHeading = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 12px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`

export const ContactDescription = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
  line-height: 1.6;
`
