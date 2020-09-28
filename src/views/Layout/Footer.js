import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {`© ${new Date().getFullYear()} TRA Information Technologies`}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;