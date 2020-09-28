import React from 'react';
import { memoize } from 'react-data-table-component'; 
import moment from 'moment';
 

export const DataTableColumns = {
  AppointmentList: [
    {
      name: 'Açıklama',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Randevu Tarihi',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Randevu Yeri',
      selector: 'place',
      sortable: true,
    },
    {
      name: '#',
      selector: 'id',
      width: '160px',
      cell: d => {
        return (
          <span>
            <a href={`/AppointmentUpdate/${d.id}`} target="_blank">
              <button type="button" className="btn btn-info btn-sm waves-effect waves-light ml-2" title="Detay">
                <i className="fas fa-info-circle mr-1" />
                Düzenle
                </button>
            </a>
          </span>)
      },
    },
  ],

}