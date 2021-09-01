import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function TablaProfesor({ profesores }) {

    const pagination = true
    const paginationPageSize = 4

    return (
        <div className="mt-5 ag-theme-alpine" style={{ height: 400, width: '50%' }}>
            <AgGridReact
                rowData={profesores}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
            >
                <AgGridColumn
                    headerName="Nombre"
                    field="nombre"
                    flex={4}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default TablaProfesor
