import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  bacground-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-position: center;
  height: 250px;
  margin-bottom: 20px;
`
export const BannerLogo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`
export const BannerText = styled.p`
  font-size: 16px;
  color: #000000;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const BannerContent = styled.div`
  max-width: 60%;
`
export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  align-self: flex-start;
  cursor: pointer;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  font-family: 'Roboto';
`
export const SearchInputContainer = styled.div`
  display: flex;
  border: 1px solid ${props => (props.isDarkTheme ? '#475569' : '#cccccc')};
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`
export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#f1f1f1')};
  border: none;
  padding: 10px;
  cursor: pointer;
`
export const VideoListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  padding: 40px 20px;
`
export const FailureImage = styled.img`
  width: 300px;
  max-width: 90%;
  margin-bottom: 20px;
`
export const FailureViewHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`
export const FailureViewDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#7e858e')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
`
export const NoVideoImage = styled.img`
  width: 300px;
  max-width: 90%;
  margin-bottom: 20px;
`
export const NoVideoDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#7e858e')};
`
export const NoVideoHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`
