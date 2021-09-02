import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import PropTypes from 'prop-types'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function TablaCiudad({ ciudades }) {

    const pagination = true
    const paginationPageSize = 4

    return (
        <div className="mt-5 ag-theme-alpine" style={{ height: 400, width: '50%' }}>
            <AgGridReact
                rowData={ciudades}
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

TablaCiudad.propTypes = {
    ciudades: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TablaCiudad
