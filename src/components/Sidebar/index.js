import {NavLink} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SidebarContainer,
  SidebarItemsList,
  SidebarItem,
  SidebarLinkText,
  ContactUsContainer,
  ContactUsHeading,
  SocialIconsContainer,
  SocialIcon,
  ContactDescription,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <SidebarItemsList>
            <NavLink to="/" exact>
              <SidebarItem isDarkTheme={isDarkTheme}>
                <AiFillHome size={20} />
                <SidebarLinkText isDarkTheme={isDarkTheme}>
                  Home
                </SidebarLinkText>
              </SidebarItem>
            </NavLink>

            <NavLink to="/trending">
              <SidebarItem isDarkTheme={isDarkTheme}>
                <AiFillFire size={20} />
                <SidebarLinkText isDarkTheme={isDarkTheme}>
                  Trending
                </SidebarLinkText>
              </SidebarItem>
            </NavLink>

            <NavLink to="/gaming">
              <SidebarItem isDarkTheme={isDarkTheme}>
                <SiYoutubegaming size={20} />
                <SidebarLinkText isDarkTheme={isDarkTheme}>
                  Gaming
                </SidebarLinkText>
              </SidebarItem>
            </NavLink>

            <NavLink to="/saved-videos">
              <SidebarItem isDarkTheme={isDarkTheme}>
                <MdPlaylistAdd size={20} />
                <SidebarLinkText isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SidebarLinkText>
              </SidebarItem>
            </NavLink>
          </SidebarItemsList>

          <ContactUsContainer>
            <ContactUsHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </ContactUsHeading>
            <SocialIconsContainer>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactDescription>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
