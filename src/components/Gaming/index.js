import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoGameController} from 'react-icons/io5'
import {withRouter} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'

import {
  GamingContainer,
  GamingContentContainer,
  GamingSidebarContainer,
  GamingMainContainer,
  GamingBanner,
  BannerIconContainer,
  BannerHeading,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosList,
  VideoItem,
  VideoThumbnail,
  VideoDetailsContainer,
  VideoTitle,
  ViewsAndDate,
  TrendingVideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))

      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  onClickVideo = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  renderGamingVideos = isDark => {
    const {gamingVideos} = this.state

    return (
      <VideosList>
        {gamingVideos.map(video => (
          <VideoItem key={video.id} onClick={() => this.onClickVideo(video.id)}>
            <VideoThumbnail src={video.thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoTitle isDark={isDark}>{video.title}</VideoTitle>
              <ViewsAndDate>{video.viewCount} Watching Worldwide</ViewsAndDate>
            </VideoDetailsContainer>
          </VideoItem>
        ))}
      </VideosList>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDark => (
    <FailureViewContainer>
      <FailureImage
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDescription isDark={isDark}>
        We are having trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderSuccessView = isDark => (
    <>
      <GamingBanner isDark={isDark}>
        <BannerIconContainer isDark={isDark}>
          <IoGameController size={30} color="#ff0000" />
        </BannerIconContainer>
        <BannerHeading isDark={isDark}>Gaming</BannerHeading>
      </GamingBanner>
      <TrendingVideosContainer>
        {this.renderGamingVideos(isDark)}
      </TrendingVideosContainer>
    </>
  )

  render() {
    const {apiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <GamingContainer data-testid="gaming" isDark={isDark}>
              <Header />
              <GamingContentContainer>
                <GamingSidebarContainer>
                  <Sidebar />
                </GamingSidebarContainer>
                <GamingMainContainer isDark={isDark}>
                  {(() => {
                    switch (apiStatus) {
                      case apiStatusConstants.success:
                        return this.renderSuccessView(isDark)
                      case apiStatusConstants.failure:
                        return this.renderFailureView(isDark)
                      case apiStatusConstants.inProgress:
                        return this.renderLoadingView()
                      default:
                        return null
                    }
                  })()}
                </GamingMainContainer>
              </GamingContentContainer>
            </GamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Gaming)
