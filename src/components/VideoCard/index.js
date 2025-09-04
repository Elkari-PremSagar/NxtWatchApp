// VideoCard/index.js
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoCardContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoInfoContainer,
  Title,
  ChannelName,
  ViewsAndDate,
  VideoItem,
  Dot,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  const publishedDate = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  })

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoCardContainer>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoDetailsContainer>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoInfoContainer>
                    <Title isDarkTheme={isDarkTheme}>{title}</Title>
                    <ChannelName isDarkTheme={isDarkTheme}>
                      {channel.name}
                    </ChannelName>
                    <ViewsAndDate isDarkTheme={isDarkTheme}>
                      <p>{viewCount} views</p>
                      <Dot> • </Dot>
                      <p>{publishedDate}</p>
                    </ViewsAndDate>
                  </VideoInfoContainer>
                </VideoDetailsContainer>
              </VideoCardContainer>
            </Link>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
