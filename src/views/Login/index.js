 import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Service } from '../../services';
import { notify, Modal } from '../../components';

export function Login() {
  const { auth, setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    Password: '',
    Email: '',
  });

  const handleFormData = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  const onLogin = evt => {

    Service.User.Login(formData).then(response => {
      if (response) {
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(response));
        setAuth(true);
      } else {
        setAuth(false);
      }
    });

    evt.preventDefault();
  };

  return (
    <>
      {
        auth ?
          <Redirect to="/Home" />
          :
          (
            <div className="wrapper-page">
              <div className="card account-card mx-3">
                <div className="bg-dark p-4 text-white text-center position-relative">
                  <h4 className="font-20 m-b-5">Randevu Sistemi</h4>
                  <p className="text-white-50 mb-4">Randevu Sistemi</p>
                </div>
                <form onKeyPress={e => e.key === 'Enter' && onLogin(e)}>
                  <div className="account-card-content">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="Email" name="Email" value={formData.Email} placeholder="Enter email" onChange={handleFormData} autoComplete="off" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" id="Password" name="Password" value={formData.Password} placeholder="Enter password" onChange={handleFormData} />
                    </div>
                    <div className="form-group m-t-10 mb-0 row xd-login-actions">
                      <div className="col-lg-6 col-12 text-left">
                        <button type="button" className="btn btn-dark w-md waves-effect waves-light" onClick={onLogin}>Log In</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )
      }
      <Modal Title="Forgot Password" className="modal-sm" Show={modal} isSmall onClose={() => setModal(false)}>
        <div className="row">
          <div className="col-md-12 text-center">
            <input type="text" name="forgotEmail" className="form-control" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
      </Modal>
    </>
  );
}
