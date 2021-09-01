import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch } from 'react-redux'

import { deleteGrupo } from '../../redux/grupo/action'
import ActionsTablas from '../ActionsTablas'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function TablaGrupos(props) {

    const dispatch = useDispatch()

    const handleDelete = grupo => {
        const { notify } = props
        dispatch(deleteGrupo(grupo))
        notify('eliminado')
    }

    const handleModalEditOpen = grupo => {
        const { state, setState } = props
        setState({ ...state, grupoId: grupo._id })
    }
    const { grupos } = props
    const pagination = true
    const paginationPageSize = 4

    return (
        <div className="mt-5 ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={grupos}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                frameworkComponents={{ actionsTablas: ActionsTablas }}
            >
                <AgGridColumn
                    headerName="Nombre"
                    field="nombre"
                    flex={4}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Profesor Guia"
                    field="profesorGuia.nombre"
                    flex={4}
                    sortable={true}
                    filter={true}></AgGridColumn>
                <AgGridColumn
                    headerName="Acciones"
                    flex={4}
                    cellRenderer="actionsTablas"
                    cellRendererParams={{
                        onModalEdit: handleModalEditOpen,
                        onDelete: handleDelete,
                    }}
                ></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

export default TablaGrupos
