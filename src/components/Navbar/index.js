import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {FaGamepad} from 'react-icons/fa'

import './index.css'

const Navbar = () => (
  <div className="nav-main-container">
    <div>
      <li className="list-container">
        <Link to="/">
          <AiFillHome /> Home
        </Link>
      </li>
      <li className="list-container">
        <Link to="/trending">
          <AiFillFire /> Trending
        </Link>
      </li>
      <li className="list-container">
        <Link to="/gaming">
          <FaGamepad /> Gaming
        </Link>
      </li>
    </div>
    <div>
      <h1>Contact Us</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook"
          className="contact-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="facebook"
          className="contact-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="facebook"
          className="contact-logo"
        />
      </div>
    </div>
  </div>
)

export default Navbar
