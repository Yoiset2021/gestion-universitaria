import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeFn from './redux/store'

import Layout from './componentes/layout'
import ListaEstudiantes from './componentes/estudiantes/ListaEstudiantes'
import ListaGrupos from './componentes/grupos/ListaGrupos'
import ListaCiudades from './componentes/ciudades/ListaCiudades'
import ListaProfesores from './componentes/profesores/ListaProfesores'
import ListaEstudiantesPorGrupo from './componentes/grupos/EstudiantesPorGrupo'
import Home from './componentes/Home'

const store = storeFn()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/estudiantes" component={ListaEstudiantes} />
            <Route path="/grupos/:id/estudiantes" component={ListaEstudiantesPorGrupo} />
            <Route exact path="/grupos" component={ListaGrupos} />
            <Route path="/ciudades" component={ListaCiudades} />
            <Route path="/profesores" component={ListaProfesores} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App