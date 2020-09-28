import { Appointment } from '../config/AppConfig';
import { Fetch } from '../components';

export const UserService = {

  /**
* [LOGIN]
* @param {object} data
* @param {string} data.email
* @param {string} data.password
*/
  Login(data) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return Fetch(Appointment.service.user.login, requestOptions);
  },


  /**
  * [LOGOUT]
  */
  Logout() {
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
  /**
 * [CheckLogin]
 */
  CheckLogin() {
    return localStorage.getItem('user') != null;

    // const requestOptions = {
    //   method: 'GET',
    //   headers: Appointment.utilities.authorizedHeader(),
    // };
    // return fetch(Appointment.service.user.checkLogin, requestOptions)
    //   .then(response => {
    //     if (response) {
    //       return true;
    //     }
    //     return false;
    //   })
    //   .then(json => json)
    //   .catch(() => false);
  },
};
