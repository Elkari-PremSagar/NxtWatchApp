// Trending/styledComponents.js
// Trending/styledComponents.js
import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const TrendingSidebarContainer = styled.div`
  width: 250px;
  flex-shrink: 0;
`

export const TrendingMainContainer = styled.div`
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`

export const TrendingBanner = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`

export const BannerIconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  border-radius: 40px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
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
  justify-content: center;
  text-align: center;
  padding: 30px;
`

export const FailureImage = styled.img`
  width: 250px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  margin-bottom: 10px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #7e858e;
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const VideoCard = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
`

export const VideoThumbnail = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;
  margin-right: 15px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  margin-bottom: 6px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-bottom: 4px;
`

export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
`
