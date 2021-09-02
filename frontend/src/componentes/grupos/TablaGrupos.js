import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteGrupo } from '../../redux/grupo/action'
import ActionsTablas from '../ActionsTablas'
import ActionShow from './ActionShow'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function TablaGrupos(props) {

    const dispatch = useDispatch()

    const handleDelete = grupo => {
        dispatch(deleteGrupo(grupo))
        notify('eliminado')
    }

    const { notify, grupos, handleModalEditOpen } = props
    const pagination = true
    const paginationPageSize = 4

    return (
        <div className="mt-5 ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={grupos}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                frameworkComponents={{ actionShow: ActionShow, actionsTablas: ActionsTablas }}
            >
                <AgGridColumn
                    headerName="Nombre"
                    field="nombre"
                    flex={3}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Profesor Guia"
                    field="profesorGuia.nombre"
                    flex={3}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Estudiantes"
                    flex={3}
                    cellRenderer="actionShow"
                >
                </AgGridColumn>
                <AgGridColumn
                    headerName="Acciones"
                    flex={3}
                    cellRenderer="actionsTablas"
                    cellRendererParams={{
                        onModalEditOpen: handleModalEditOpen,
                        onDelete: handleDelete,
                    }}
                ></AgGridColumn>
            </AgGridReact>
        </div>
    )
}

TablaGrupos.propTypes = {
    grupos: PropTypes.arrayOf(PropTypes.object).isRequired,
    notify: PropTypes.func.isRequired,
    handleModalEditOpen: PropTypes.func.isRequired,
}
