import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BreadCrumb = props => (

  <div className="page-title-box">
    <div className="row align-items-center">
      <div className="col-sm-12">
        <h4 className="page-title">{props.Title}</h4>
        <ol className="breadcrumb">
          {props.Description && <li className="breadcrumb-item">{props.Description}</li>}
          {props.Name &&
            <React.Fragment>
              <li className="breadcrumb-item"><Link to="/Home">Home}</Link></li>
              {props.SubTitle && <li className="breadcrumb-item"><Link to={props.SubUrl}>{props.SubTitle}</Link></li>}
              <li className="breadcrumb-item active">{props.Name}</li>
            </React.Fragment>
          }
        </ol>
      </div>
    </div>
  </div>
)

BreadCrumb.prototype = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  Name: PropTypes.Name,
  SubTitle: PropTypes.string,
  SubUrl: PropTypes.string
}