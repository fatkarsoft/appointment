/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Card, notify } from '../../components';
import { Button, Row, Col } from "reactstrap";
import { Service } from '../../services';


export function AppointmentUpdate(props) {
  const { computedMatch: { params } } = props;
  const id = params.id;

  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentPlace, setAppointmentPlace] = useState(''); 

  useEffect(() => {
    if (id !== undefined) {
      Service.Appointment.Get(id).then(response => {
        setAppointmentTitle(response.title);
        setAppointmentDate(response.date);
        setAppointmentPlace(response.place);
      });
    }

  }, []);

  const onUpdate = () => {
    var data = {
      id: id,
      title: appointmentTitle,
      date: appointmentDate,
      place: appointmentPlace
    };

    Service.Appointment.Update(data).then(response => {
      window.location.href = "/AppointmentList";
    });
  }

  return (
    <>
      <div className="dpm-page__wrapper">
        <div className="row mb-3">
          <div className="col-md-12">
            <Card Title="Randevu Ekle" className="pb-2 mt-4">
              <Row className="form-group">
                <label
                  htmlFor="example-text-input"
                  className="col-sm-2 col-form-label"
                >
                  Açıklama
                    </label>
                <Col sm={10}>
                  <input
                    className="form-control"
                    type="text"
                    id="example-text-input"
                    onChange={(e) => setAppointmentTitle(e.target.value)}
                    value={appointmentTitle}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <label
                  htmlFor="example-search-input"
                  className="col-sm-2 col-form-label"
                >
                  Randevu Tarihi
                    </label>
                <Col sm={10}>
                  <input
                    className="form-control"
                    type="search"
                    id="example-search-input"
                    onChange={(e) => setAppointmentPlace(e.target.value)}
                    value={appointmentPlace}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <label
                  htmlFor="example-search-input"
                  className="col-sm-2 col-form-label"
                >
                  Randevu Yeri
                    </label>
                <Col sm={10}>
                  <input
                    className="form-control"
                    type="search"
                    id="example-search-input"
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    value={appointmentDate}
                  />
                </Col>
              </Row>

              <Button
                color="primary"
                className="btn btn-primary waves-effect waves-light"
                onClick={() => onUpdate()}
              >Güncelle</Button>

            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
