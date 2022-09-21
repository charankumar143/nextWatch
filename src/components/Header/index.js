import './index.css'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="app logo"
      className="header-icon"
    />
    <button type="button" className="theme-button">
      Change Theme
    </button>
    <button type="button">Logout</button>
  </div>
)

export default Header
