import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingContainer,
  TrendingContentContainer,
  TrendingSidebarContainer,
  TrendingMainContainer,
  TrendingVideosContainer,
  TrendingBanner,
  BannerIconContainer,
  BannerHeading,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideosList,
  VideoCard,
  VideoThumbnail,
  VideoDetailsContainer,
  ChannelName,
  VideoTitle,
  ViewsAndDate,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => {
    const failureImgUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureViewContainer>
        <FailureImage src={failureImgUrl} alt="failure view" />
        <FailureHeading isDark={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
      </FailureViewContainer>
    )
  }

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state

    return (
      <TrendingVideosContainer data-testid="trending">
        <TrendingBanner isDark={isDarkTheme}>
          <BannerIconContainer isDark={isDarkTheme}>
            <HiFire size={30} color="#ff0000" />
          </BannerIconContainer>
          <BannerHeading isDark={isDarkTheme}>Trending</BannerHeading>
        </TrendingBanner>
        <VideosList>
          {videosList.map(video => (
            <Link
              to={`/videos/${video.id}`}
              key={video.id}
              style={{textDecoration: 'none'}}
            >
              <VideoCard>
                <VideoThumbnail
                  src={video.thumbnailUrl}
                  alt="video thumbnail"
                />
                <VideoDetailsContainer>
                  <VideoTitle isDark={isDarkTheme}>{video.title}</VideoTitle>
                  <ChannelName>{video.channel.name}</ChannelName>
                  <ViewsAndDate>
                    <p>{video.viewCount} views</p>
                    <p> • {video.publishedAt}</p>
                  </ViewsAndDate>
                </VideoDetailsContainer>
              </VideoCard>
            </Link>
          ))}
        </VideosList>
      </TrendingVideosContainer>
    )
  }

  renderTrendingContent = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer data-testid="trending">
              <Header />
              <TrendingContentContainer>
                <TrendingSidebarContainer>
                  <Sidebar />
                </TrendingSidebarContainer>
                <TrendingMainContainer isDark={isDarkTheme}>
                  {this.renderTrendingContent(isDarkTheme)}
                </TrendingMainContainer>
              </TrendingContentContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
