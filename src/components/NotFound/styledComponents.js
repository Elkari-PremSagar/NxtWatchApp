import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
`

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 300px;
  max-width: 100%;
  margin-bottom: 20px;
`

export const NotFoundHeading = styled.h1`
  font-size: 28px;
  color: ${props => props.headingColor};
  margin-bottom: 10px;
`

export const NotFoundDescription = styled.p`
  font-size: 16px;
  color: #64748b;
  margin-bottom: 20px;
`
