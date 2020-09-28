export const Appointment = {
  config: {
    /**
   * [GENERAL]
   */
    // eslint-disable-next-line func-names, prefer-arrow-callback, no-unused-vars
    debug: /param/.test(function (param) { }),
  },
  api: {
    release: {
      user: 'https://5f720fe864a3720016e613e3.mockapi.io/api',
    },
    debug: {
      user: 'https://5f720fe864a3720016e613e3.mockapi.io/api',
    },
    user: url => (Appointment.config.debug ? Appointment.api.debug.user.concat(url) : Appointment.api.release.user.concat(url)),
  },
  service: {
    user: {},
    appointment: {},
  },
  utilities: {
    authorizedHeader: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.token) {
        return { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` };
      }
      return { 'Content-Type': 'application/json' };
    },
    user: () => (JSON.parse(localStorage.getItem('user'))),
    userToken: () => (JSON.parse(localStorage.getItem('user')).token),
  },
};

Appointment.service.user = {
  login: Appointment.api.user('/login'),
  checkLogin: Appointment.api.user('/login'),
};

Appointment.service.appointment = {
  list: Appointment.api.user('/appointmentlist'),
  create: Appointment.api.user('/appointmentlist'),
  get: Appointment.api.user('/appointmentlist'),
  update: Appointment.api.user('/appointmentlist'),
};