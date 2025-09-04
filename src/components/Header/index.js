import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {IoMdLogOut} from 'react-icons/io'
import ThemeContext from '../../context/ThemeContext'

import {
  NavHeader,
  NavContent,
  WebsiteLogo,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  LogoutIconButton,
  ButtonsContainer,
  PopupContainer,
  PopupText,
  PopupButtons,
  ConfirmButton,
  CancelButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavHeader dark={isDarkTheme}>
          <NavContent>
            <Link to="/">
              <WebsiteLogo src={websiteLogoUrl} alt="website logo" />
            </Link>
            <ButtonsContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
              >
                {isDarkTheme ? (
                  <FiSun size={24} color="#ffffff" />
                ) : (
                  <FaMoon size={24} color="#000000" />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton type="button" dark={isDarkTheme}>
                    Logout
                  </LogoutButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContainer dark={isDarkTheme}>
                    <PopupText>Are you sure, you want to logout?</PopupText>
                    <PopupButtons>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </PopupButtons>
                  </PopupContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button" dark={isDarkTheme}>
                    <IoMdLogOut size={24} />
                  </LogoutIconButton>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContainer dark={isDarkTheme}>
                    <PopupText>Are you sure, you want to logout?</PopupText>
                    <PopupButtons>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </PopupButtons>
                  </PopupContainer>
                )}
              </Popup>
            </ButtonsContainer>
          </NavContent>
        </NavHeader>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
