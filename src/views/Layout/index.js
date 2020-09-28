import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import { AuthContext } from '../../contexts/AuthContext';

const Layout = props => {
  const { auth } = useContext(AuthContext);
  const { topbar, sidebar, children, onLogout } = props;

  // const onLogoutHandle = () => {
  //   //TODO logout function
  // }

  return (
    <main>
      <div id="wrapper">
        {topbar ? <Header onLogout={onLogout} /> : null}
        {sidebar ? <SideBar onLogout={onLogout} /> : null}
        {
          auth ?
            (
              <div className="content-page">
                <div className="content dpm-main__content">
                  <div className="container-fluid">
                    {children}
                  </div>
                </div>
                <Footer />
              </div>
            )
            : children
        }

      </div>
    </main>
  );
};

Layout.propTypes = {
  topbar: PropTypes.bool,
  sidebar: PropTypes.bool,
  onLogout: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  topbar: false,
  sidebar: false,
  onLogout: () => { },
};

export { Layout };
