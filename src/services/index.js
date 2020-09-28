/* eslint-disable import/no-cycle */
import { UserService } from './UserService';
import { AppointmentService } from './AppointmentService';

export const Service = {
  User: UserService,
  Appointment: AppointmentService
};
