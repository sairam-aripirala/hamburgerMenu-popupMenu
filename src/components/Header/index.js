import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <Link className="navigation-links" to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-btn"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hambuger-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="trigger-btn-close"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="hambuger-icon" />
          </button>
          <ul className="navigations-container">
            <li>
              <Link className="navigation-links" to="/">
                <button className="navigation-btn" type="button">
                  <AiFillHome className="navigation-icons" />
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link className="navigation-links" to="/about">
                <button className="navigation-btn" type="button">
                  <BsInfoCircleFill className="navigation-icons" />
                  About
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default withRouter(Header)
