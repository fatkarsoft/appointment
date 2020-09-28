import { Loading, SetDefault } from 'react-loading-ui';

export const Fetch = (url, requestOptions) => {
  SetDefault({ title: 'Yükleniyor.', text: 'Lütfen bekleyiniz.' });
  Loading();

  return (fetch(url, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        localStorage.removeItem('user');
        window.location.reload();
      } else {
        throw new Error();
      }
      return false;
    })
    .then(json => {
      Loading();
      return json;
    })
    .catch(() => {
      Loading();
      return false;
    })
  );
};
