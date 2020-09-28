import { Appointment } from '../config/AppConfig';
import { Fetch } from '../components';


export const AppointmentService = {
  List() {
    const requestOptions = {
      method: 'GET',
      headers: Appointment.utilities.authorizedHeader(),
    };
    return Fetch(Appointment.service.appointment.list, requestOptions);
  },
  Get(id) {
    const requestOptions = {
      method: 'GET',
      headers: Appointment.utilities.authorizedHeader(),
    };

    const url = `${Appointment.service.appointment.get}/${id}`;
    return Fetch(url, requestOptions);
  },
  Create(data) {
    const requestOptions = {
      method: 'POST',
      headers: Appointment.utilities.authorizedHeader(),
      body: JSON.stringify(data),
    };
    return Fetch(Appointment.service.appointment.create, requestOptions);
  },
  Update(data) {
    const requestOptions = {
      method: 'PUT',
      headers: Appointment.utilities.authorizedHeader(),
      body: JSON.stringify(data),
    };
    debugger;
    const url = `${Appointment.service.appointment.update}/${data.id}`;
    return Fetch(url, requestOptions);
  },
}