import React, { useState, useEffect } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ActionsTablas from '../ActionsTablas'
import { deleteEstudiante } from '../../redux/estudiante/action'

function TablaEstudiantes(props) {

    const [localArray, setLocalArray] = useState([])
    const dispatch = useDispatch()

    const handleDelete = estudiante => {
        const { notify } = props
        dispatch(deleteEstudiante(estudiante))
        notify('eliminado')
    }

    const handleModalEditOpen = estudiante => {
        const { state, setState } = props
        setState({ ...state, estudianteId: estudiante._id })
    }

    const { estudiantes } = props

    useEffect(() => {
        const { estudiantes } = props
        if (estudiantes.length) {
            estudiantes.forEach(element => {
                const fecha = format(new Date(element.fechaNacimiento), 'yyyy-MM-dd')
                element.fechaNacimiento = fecha
            });
            setLocalArray(estudiantes)
        }
    }, [estudiantes, props])

    const pagination = true
    const paginationPageSize = 4

    return (
        <div className="mt-5 ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={localArray}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                frameworkComponents={{ actionsTablas: ActionsTablas }}
            >
                <AgGridColumn
                    headerName="Nombre"
                    field="nombre"
                    flex={2}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Sexo"
                    field="sexo"
                    flex={1}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Edad"
                    field="edad"
                    flex={1}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Email"
                    field="email"
                    flex={2}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Fecha Nacimiento"
                    field="fechaNacimiento"
                    flex={2}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Ciudad"
                    field="ciudad.nombre"
                    flex={1}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Grupo"
                    field="grupo.nombre"
                    flex={1}
                    sortable={true}
                    filter={true}>
                </AgGridColumn>
                <AgGridColumn
                    headerName="Acciones"
                    flex={1}
                    cellRenderer="actionsTablas"
                    cellRendererParams={{
                        onModalEdit: handleModalEditOpen,
                        onDelete: handleDelete,
                    }}
                ></AgGridColumn>
            </AgGridReact>
        </div >
    )
}

export default TablaEstudiantes

