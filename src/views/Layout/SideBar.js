import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';
import './Leftsidebar.css';


export function SideBar() {
  useEffect(() => {
    if ($(window).width() < 1025) {
      $('body').addClass('enlarged');
    } else {
      $('body').removeClass('enlarged');
    }

    $('.button-menu-mobile').on('click', event => {
      event.preventDefault();
      $('body').toggleClass('enlarged');
    });
  }, []);


  return (
    <div className="left side-menu">
      <Scrollbars className="Scrollbars">
        <div>
          <div id="sidebar-menu">
            <ul className="metismenu" id="side-menu">
              <li>
                <NavLink to="/Home" className="waves-effect" activeClassName="active">
                  <i className="ion ion-ios-home" />
                  <span className="ml-1 mr-1">Giriş</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AppointmentList" className="waves-effect" activeClassName="active">
                  <i className="ion ion-ios-home" />
                  <span className="ml-1 mr-1">Randevular</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/AppointmentCreate" className="waves-effect" activeClassName="active">
                  <i className="ion ion-md-filing" />
                  <span className="ml-1 mr-1">Randevu Ekle</span>
                </NavLink>
              </li> 
            </ul>
          </div>
          <div className="clearfix" />
        </div>
      </Scrollbars>
    </div>
  );
}
export default SideBar;
