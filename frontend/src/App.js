import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import storeFn from './redux/store'

import Layout from './componentes/layout'
import ListaEstudiantes from './componentes/estudiantes/ListaEstudiantes'
import ListaGrupos from './componentes/grupos/ListaGrupos'
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
            <Route path="/grupos" component={ListaGrupos} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App