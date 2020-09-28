/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Service } from '../../services';
import { DataTableColumns } from '../../config/DataTableColumns';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';
import { Card } from '../../components';

export function AppointmentList() {
  
  const [dataTable, setDataTable] = useState({ rows: [], columns: DataTableColumns.AppointmentList });

  const getTable = () => {
    Service.Appointment.List().then(response => {
      setDataTable({ ...dataTable, rows: response });
    });
  };

  useEffect(() => {
    getTable();
  }, []);


  return (
    <>
      <div className="dpm-page__wrapper">
        <div className="row mb-3">
          <div className="col-md-12">
            <Card Title="Randevular" className="pb-2 mt-4">
              <DataTableExtensions
                columns={dataTable.columns}
                data={dataTable.rows}
                export={false}
                print={false}
              >
                <DataTable
                  noHeader
                  className="tbl-ActionCenter"
                  defaultSortField="id"
                  defaultSortAsc={false}
                  pagination
                  highlightOnHover
                />
              </DataTableExtensions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
