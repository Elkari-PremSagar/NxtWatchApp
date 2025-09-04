// SavedVideos/styledComponents.js
import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
`

export const SavedVideosBodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const SidebarContainer = styled.div`
  width: 20%;
`

export const SavedVideosContentContainer = styled.div`
  width: 80%;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const SavedBannerContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  padding: 30px 20px;
  display: flex;
  align-items: center;
`

export const SavedIconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  padding: 15px;
  border-radius: 50%;
  margin-right: 15px;
`

export const SavedHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const NoSavedContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
`

export const NoSavedImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const NoSavedHeading = styled.h1`
  font-size: 22px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 10px;
`

export const NoSavedNote = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#475569')};
`

export const SavedVideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
`
