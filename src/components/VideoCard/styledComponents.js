// VideoCard/styledComponents.js
import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    max-width: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 6px;

  @media screen and (min-width: 576px) {
    width: 350px;
    height: 200px;
    margin-right: 16px;
  }
`
export const VideoItem = styled.li`
  list-style-type: none;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  padding-top: 12px;

  @media screen and (min-width: 576px) {
    padding-top: 0;
  }
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 12px;
  flex-shrink: 0;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  margin-bottom: 6px;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  margin-bottom: 4px;
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`

export const Dot = styled.span`
  margin: 0 6px;
`
