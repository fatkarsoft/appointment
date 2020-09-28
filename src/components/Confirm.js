import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';

function removeElementReconfirm() {
  const target = document.getElementById('sweet-alert');
  unmountComponentAtNode(target);
  target.parentNode.removeChild(target);
}

class SweetAlertWrapper extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    type: PropTypes.object,
  }

  static defaultProps = {
    title: 'Emin misiniz?',
    description: '',
    type: { warning: true },
  }

  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  render() {
    const { show } = this.state;
    const { title, type, onConfirm, onCancel, description } = this.props;
    return (
      show ? (
        <SweetAlert
          title={title}
          type={type}
          showCancel
          confirmBtnBsStyle="success"
          cancelBtnBsStyle="danger"
          cancelBtnText="Cancel"
          confirmBtnText="Yes"
          onConfirm={() => {
            this.setState({ show: false }, () => {
              removeElementReconfirm();
              onConfirm();
            });
          }}
          onCancel={() => {
            this.setState({ show: false }, () => {
              removeElementReconfirm();
              onCancel();
            });
          }}
        >
          {description}
        </SweetAlert>
      ) : null);
  }
}


function createElement(props) {
  let divTarget = document.getElementById('sweet-alert');

  if (divTarget) {
    // Rerender - the mounted ReactConfirmAlert
    render(<SweetAlertWrapper {...props} />, divTarget);
  } else {
    // Mount the ReactConfirmAlert component
    divTarget = document.createElement('div');
    divTarget.id = 'sweet-alert';
    document.body.appendChild(divTarget);
    render(<SweetAlertWrapper {...props} />, divTarget);
  }
}

export function Confirm(props) {
  createElement(props);
}
