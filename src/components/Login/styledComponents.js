import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 4px 16px 0px #bfbfbf'};
  padding: 32px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto 24px;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`

export const InputField = styled.input`
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  color: #1e293b;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckboxInput = styled.input`
  margin-right: 8px;
`

export const CheckboxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 14px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 6px;
`
