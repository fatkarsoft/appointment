import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const notify = {
  error: message => {
    notify.invoke('error', message);
  },
  success: message => {
    notify.invoke('success', message);
  },
  invoke: (type, text) => {
    toast[type](text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  },
};
