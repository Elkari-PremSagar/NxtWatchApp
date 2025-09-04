import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  HomeRouteContainer,
  ContentContainer,
  BannerSection,
  BannerContent,
  BannerLogo,
  BannerText,
  GetItNowButton,
  BannerCloseButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  VideoListContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  NoVideoImage,
  NoVideoDescription,
  NoVideoHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = isDarkThem => (
    <FailureContainer>
      <FailureImage
        src={
          isDarkThem
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <FailureViewHeading isDarkThem={isDarkThem}>
        Oops! Something Went Wrong
      </FailureViewHeading>
      <FailureViewDescription>
        We are having some trouble to complete your request.Please try again.
      </FailureViewDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderNoSearchResultsView = isDarkThem => (
    <FailureContainer>
      <NoVideoImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideoHeading isDarkThem={isDarkThem}>
        No Search Results Found
      </NoVideoHeading>
      <NoVideoDescription>
        Try Different Key Words or remove search filter
      </NoVideoDescription>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = isDarkThem => {
    const {videosList} = this.state
    const showNoResults = videosList.length === 0

    return showNoResults ? (
      this.renderNoSearchResultsView(isDarkThem)
    ) : (
      <VideoListContainer>
        {videosList.map(video => (
          <VideoCard videoDetails={video} key={video.id} />
        ))}
      </VideoListContainer>
    )
  }

  renderHomeVideos = isDarkThem => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkThem)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkThem)
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomeRouteContainer data-testid="home" isDarkTheme={isDarkTheme}>
              <Header />
              <ContentContainer>
                <Sidebar />
                <div>
                  {showBanner && (
                    <BannerSection data-testid="banner">
                      <BannerContent>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium Prepaid plans with UPI
                        </BannerText>
                        <GetItNowButton data-testid="get it now" type="button">
                          GET IT NOW
                        </GetItNowButton>
                        <BannerCloseButton
                          data-testid="close"
                          onClick={this.onCloseBanner}
                        >
                          <IoMdClose />
                        </BannerCloseButton>
                      </BannerContent>
                    </BannerSection>
                  )}

                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      isDarkTheme={isDarkTheme}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.onClickSearch}
                      isDarkTheme={isDarkTheme}
                      type="button"
                    >
                      <AiOutlineSearch />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderHomeVideos(isDarkTheme)}
                </div>
              </ContentContainer>
            </HomeRouteContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
