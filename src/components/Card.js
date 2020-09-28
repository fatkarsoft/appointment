import React from 'react';
import PropTypes from 'prop-types';

export const Card = (props) => (
  <div className="row">
    <div className="col-12">
      <div className={"card " + (props.className || "")}>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-11">
              {props.Title && <h4 className="mt-0 header-title">{props.Title}</h4>}
              {props.Description && <p className="text-muted m-b-30">{props.Description}</p>}
            </div>
            <div className="col-lg-1">
              {props.Logo && <img src={"/assets/images/" + (props.Logo || "defaultlogo.svg")} alt="" height="30" />}
            </div>
          </div>
          <div className="card-tool">
            {props.Tools}
          </div>
          {props.children}
          {props.Logo && <img src={"/assets/psp-logo/" + (props.Logo || "defaultlogo.svg")} alt="" height="30" className="card-logo" />}
        </div>
      </div>
    </div>
  </div>
)

Card.prototype = {
  Title: PropTypes.string,
  Description: PropTypes.string
}

