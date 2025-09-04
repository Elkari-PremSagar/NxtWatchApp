import {Link} from 'react-router-dom'
import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundContentContainer,
} from './styledComponents'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const notFoundImageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

  const headingColor = isDarkTheme ? '#f9f9f9' : '#1e293b'

  return (
    <NotFoundContainer data-testid="notFound">
      <NotFoundContentContainer>
        <NotFoundImage src={notFoundImageUrl} alt="not found" />
        <NotFoundHeading headingColor={headingColor}>
          Page Not Found
        </NotFoundHeading>
        <NotFoundDescription>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
        <Link to="/">
          <button type="button">Go to Home</button>
        </Link>
      </NotFoundContentContainer>
    </NotFoundContainer>
  )
}

export default NotFound
