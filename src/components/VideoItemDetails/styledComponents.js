// VideoItemDetails/styledComponents.js
import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const FailureViewContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
  font-size: 22px;
  margin-bottom: 8px;
`

export const FailureDescription = styled.p`
  color: #7e858e;
  text-align: center;
  max-width: 400px;
  margin-bottom: 12px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const PlayerContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  margin-bottom: 12px;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Views = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`

export const Dot = styled.span`
  margin: 0 6px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

export const HorizontalLine = styled.hr`
  margin: 20px 0;
  border: 0.5px solid #cccccc;
`

export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 16px;
`

export const ChannelLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: 24px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#1e293b')};
  margin-bottom: 4px;
`

export const SubscriberCount = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  margin-bottom: 10px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#475569')};
`
