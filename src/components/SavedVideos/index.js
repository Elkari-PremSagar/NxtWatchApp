import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import VideoCard from '../VideoCard'

import {
  SavedVideosMainContainer,
  SavedVideosBodyContainer,
  SidebarContainer,
  SavedVideosContentContainer,
  SavedBannerContainer,
  SavedIconContainer,
  SavedHeading,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedNote,
  SavedVideosList,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoSavedVideos = isDarkTheme => (
    <NoSavedContainer>
      <NoSavedImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading isDarkTheme={isDarkTheme}>
        No saved videos found
      </NoSavedHeading>
      <NoSavedNote isDarkTheme={isDarkTheme}>
        You can save your videos while watching them
      </NoSavedNote>
    </NoSavedContainer>
  )

  renderSavedVideosList = (savedVideosList, isDarkTheme) => (
    <SavedVideosContentContainer isDarkTheme={isDarkTheme}>
      <SavedBannerContainer data-testid="banner" isDarkTheme={isDarkTheme}>
        <SavedIconContainer isDarkTheme={isDarkTheme}>
          <MdPlaylistAdd size={25} color="#ff0000" />
        </SavedIconContainer>
        <SavedHeading isDarkTheme={isDarkTheme}>Saved Videos</SavedHeading>
      </SavedBannerContainer>
      <SavedVideosList>
        {savedVideosList.map(video => (
          <VideoCard key={video.id} videoDetails={video} />
        ))}
      </SavedVideosList>
    </SavedVideosContentContainer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value

          return (
            <SavedVideosMainContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              <Header />
              <SavedVideosBodyContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                {savedVideosList.length === 0
                  ? this.renderNoSavedVideos(isDarkTheme)
                  : this.renderSavedVideosList(savedVideosList, isDarkTheme)}
              </SavedVideosBodyContainer>
            </SavedVideosMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
