// Gaming/styledComponents.js

import styled from 'styled-components'

export const GamingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const GamingSidebarContainer = styled.div`
  width: 20%;
`

export const GamingMainContainer = styled.div`
  width: 80%;
  padding: 20px;
`

export const GamingBanner = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  padding: 20px;
  border-radius: 6px;
`

export const BannerIconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  border-radius: 50%;
  padding: 15px;
  margin-right: 15px;
`

export const BannerHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 24px;
  font-weight: bold;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px;
`

export const FailureImage = styled.img`
  width: 300px;
  max-width: 90%;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 22px;
  margin-top: 20px;
`

export const FailureDescription = styled.p`
  color: #64748b;
  font-size: 16px;
  margin: 10px 0;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 15px;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const VideoItem = styled.li`
  width: 200px;
  margin: 15px;
  cursor: pointer;
  text-decoration: none;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const VideoDetailsContainer = styled.div`
  padding: 10px 5px 0 5px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-top: 4px;
`
export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
