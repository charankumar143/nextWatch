import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    displayPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  renderSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const apiUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderSuccess(data.jwt_token)
    } else {
      this.renderFailure(data.error_msg)
    }
  }

  onDisplayPassword = () => {
    this.setState(prevState => ({displayPassword: !prevState.displayPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      username,
      password,
      displayPassword,
      showSubmitError,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      ;<Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            {displayPassword ? (
              <input type="text" value={password} />
            ) : (
              <input
                type="password"
                id="password"
                value={password}
                onChange={this.onChangePassword}
              />
            )}
            <br />
            <input
              type="checkbox"
              id="showPassword"
              onChange={this.onDisplayPassword}
            />
            <label htmlFor="showPassword">Show Password</label>
            <br />
            <button type="submit" className="login-button">
              LOGIN
            </button>
            {showSubmitError && <p>*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
