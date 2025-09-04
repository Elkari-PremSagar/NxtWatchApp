import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  toggleTheme: () => {},
  addToSavedVideos: () => {},
})
export default ThemeContext
