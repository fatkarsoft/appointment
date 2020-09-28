/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { Layout } from '../views/Layout';
import { Service } from '../services';

let checkAuth = false;

export const AuthContext = React.createContext();

export const AuthProvider = props => {
  const [auth, setAuth] = useState();
  const [redirectUrl, setRedirectUrl] = useState();
  const [layoutOptions, setlayoutOptions] = useState(
    {
      header: true,
      footer: true,
      sidebar: true,
    },
  );

  useEffect(() => {
    checkAuth = true;

    setAuth(Service.User.CheckLogin());

    // Service.User.CheckLogin().then(response => {
    //   if (response === true) {
    //     setAuth(true);
    //   } else {
    //     setAuth(false);
    //   }
    // });
  }, []);


  const { children } = props;
  return (
    <AuthContext.Provider
      value={
        {
          auth,
          setAuth,
          layoutOptions,
          setlayoutOptions,
          redirectUrl,
          setRedirectUrl,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export default AuthConsumer;

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ auth, onLogout, menu }) => {
      let content = '';
      if (checkAuth) {
        if (auth) {
          content = (
            <Route
              render={props => (
                <Layout topbar footer sidebar onLogout={onLogout} menu={menu}>
                  <Component {...props} {...rest} />
                </Layout>
              )}
            />
          );
        } else {
          content = <Redirect to="/Login" />;
        }
      }
      return content;
    }}
  </AuthConsumer>
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export { AuthRoute };

