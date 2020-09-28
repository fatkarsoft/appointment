import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Service } from '../../services';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleprofile = this.toggleprofile.bind(this);
    this.togglescreen = this.togglescreen.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownOpenLanguage: false,
      dropdownOpenprofile: false,
      user: {},
    };
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')),
    });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggleLanguage() {
    this.setState(prevState => ({
      dropdownOpenLanguage: !prevState.dropdownOpenLanguage,
    }));
  }

  toggleprofile() {
    this.setState(prevState => ({
      dropdownOpenprofile: !prevState.dropdownOpenprofile,
    }));
  }

  // eslint-disable-next-line class-methods-use-this
  togglescreen() {
    if (!document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement) { // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }

  render() {
    const { dropdownOpenprofile, user } = this.state;
    const { onLogout } = this.props;
    return (
      <div className="topbar">
        <div className="topbar-left">
          <Link to="/" className="logo">
            <span>
              <img src="/assets/images/logo/dp-avatar.svg" alt="" height="45" />
            </span>
          </Link>
        </div>
        <nav className="navbar-custom">
          <ul className="navbar-right d-flex list-inline float-right mb-0">
            <li className="dropdown notification-list d-none d-md-block">
              <button type="button" onClick={() => this.togglescreen()} className="nav-link waves-effect" id="btn-fullscreen">
                <i className="mdi mdi-fullscreen noti-icon" />
              </button>
            </li>
            <li className="dropdown notification-list">
              <div className="dropdown notification-list nav-pro-img">
                <Dropdown isOpen={dropdownOpenprofile} toggle={this.toggleprofile}>
                  <DropdownToggle className="dropdown-toggle testflag nav-link arrow-none waves-effect nav-user" tag="a">
                    <img src="/assets/images/logo/dp-avatar.svg" alt="user" className="rounded-circle mr-2" />
                    {/* {user.fullname} */}
                    <span className="mdi mdi-chevron-down ml-2" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => Service.User.Logout()}>
                      <i className="mdi mdi-power text-danger m-r-5" />
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </li>
          </ul>
          <ul className="list-inline menu-left mb-0">
            <li className="float-left">
              <button type="button" className="button-menu-mobile open-left waves-effect">
                <i className="mdi mdi-menu" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
