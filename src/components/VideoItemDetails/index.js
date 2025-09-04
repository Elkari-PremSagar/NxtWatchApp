// VideoItemDetails/index.js
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  VideoItemDetailsContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  PlayerContainer,
  Title,
  InfoRow,
  Views,
  Dot,
  ButtonsContainer,
  ActionButton,
  HorizontalLine,
  ChannelContainer,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  toggleLike = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisliked: false,
    }))
  }

  toggleDislike = () => {
    this.setState(prev => ({
      isDisliked: !prev.isDisliked,
      isLiked: false,
    }))
  }

  renderVideoDetails = (isDarkTheme, addToSavedVideos, savedVideosList) => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel || {}

    const isSaved = savedVideosList.some(video => video.id === id)

    const handleSave = () => {
      addToSavedVideos(videoDetails)
    }

    const publishedDate = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    })

    return (
      <VideoItemDetailsContainer
        data-testid="videoItemDetails"
        isDarkTheme={isDarkTheme}
      >
        <PlayerContainer>
          <ReactPlayer url={videoUrl} width="100%" controls />
        </PlayerContainer>
        <Title isDarkTheme={isDarkTheme}>{title}</Title>
        <InfoRow>
          <Views isDarkTheme={isDarkTheme}>
            {viewCount} views<Dot> • </Dot>
            {publishedDate}
          </Views>
          <ButtonsContainer>
            <ActionButton
              type="button"
              onClick={this.toggleLike}
              isActive={isLiked}
            >
              <AiOutlineLike size={20} /> Like
            </ActionButton>
            <ActionButton
              type="button"
              onClick={this.toggleDislike}
              isActive={isDisliked}
            >
              <AiOutlineDislike size={20} /> Dislike
            </ActionButton>
            <ActionButton type="button" onClick={handleSave} isActive={isSaved}>
              <BiListPlus size={20} />
              {isSaved ? 'Saved' : 'Save'}
            </ActionButton>
          </ButtonsContainer>
        </InfoRow>
        <HorizontalLine />
        <ChannelContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <ChannelInfo>
            <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
            <SubscriberCount isDarkTheme={isDarkTheme}>
              {subscriberCount} subscribers
            </SubscriberCount>
            <Description isDarkTheme={isDarkTheme}>{description}</Description>
          </ChannelInfo>
        </ChannelContainer>
      </VideoItemDetailsContainer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => (
    <FailureViewContainer isDarkTheme={isDarkTheme}>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureViewContainer>
  )

  render() {
    const {apiStatus} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, addToSavedVideos, savedVideosList} = value

          switch (apiStatus) {
            case apiStatusConstants.success:
              return this.renderVideoDetails(
                isDarkTheme,
                addToSavedVideos,
                savedVideosList,
              )
            case apiStatusConstants.failure:
              return this.renderFailureView(isDarkTheme)
            case apiStatusConstants.inProgress:
              return this.renderLoader()
            default:
              return null
          }
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
