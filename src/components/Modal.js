import React from 'react';
import PropTypes from 'prop-types';

export const Modal = props => {
  const { Show, children, Title, onClose, isScrollable, isSmall } = props;
  return (
    (Show) ? (
      <>
        <div className={`modal fade ${isSmall ? 'bs-example-modal-sm' : 'bs-example-modal-lg'} show d-block fadeIn`} tabIndex="-1" role="dialog">
          <div className={`modal-dialog ${isSmall ? 'modal-sm' : 'modal-lg'}`} role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myLargeModalLabel">{Title}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={onClose} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className={`modal-body ${isScrollable === true ? 'modal-body-scrollable' : ''}`}>
                {children}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary waves-effect" onClick={onClose} data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade show" />
      </>
    )
      : ''
  );
};
Modal.propTypes = {
  Show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  Title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isScrollable: PropTypes.bool,
  isSmall: PropTypes.bool,
};

Modal.defaultProps = {
  isScrollable: false,
  isSmall: false,
};
