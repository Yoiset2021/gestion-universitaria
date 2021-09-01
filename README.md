# Proyecto de prueba para Firedevs SpA

El proyecto consiste en la gestión de los estudiantes de una universidad, así como los grupos que pudieran ser asignados a dichos estudiantes. Está desarrollado con Node/ReactJS

## Estructura

- [Problema a resolver](#problema-a-resolver)
  - [Objetivo](#objetivo)
  - [Requirements](#requirements)
  - [Rutas](#rutas)
- [Backend](#backend)
  - [módulos utilizados](#modulos-utilizados)
- [frontend](#frontend)
  - [módulos utilizados](#modulos-utilizados)
- [Ejecutar projecto en local](#ejecutar-projecto-en-local)

## Problema a resolver:

### Objetivo

El objetivo de este proyecto será crear una aplicación web que permita gestionar los estudiantes de una universidad, asi como los grupos a los que pueden pertenecer dichos estudiantes.

En una universidad se desea administrar a los estudiantes.
Cada estudiante tiene edad, sexo, nombre, email, fecha de nacimiento , ciudad de
nacimiento y grupo.
Existen grupos que contienen una lista de estudiantes. El grupo tiene: nombre, profesor guía.
Realizar un sistema con un CRUD de grupos y estudiantes.
En el formulario del grupo debe aparecer un selector de profesores.
En el formulario de estudiantes debe aparecer un selector de grupos disponibles y un
selector de las ciudades.
Realice las correspondientes validaciones para el tipo de dato que lo requiera. Ex: edad, email
etc.

### Requerimientos

Se tiene que utilizar las tecnologías React/NodeJs o Python/Django. Siéntete libre de usar las bibliotecas y las prácticas que estimes. Nos interesa mucho tu creatividad.

### Rutas

- una ruta para la página principal
- Una ruta para los estudiantes
- Una ruta para los grupos

## Backend

    El backend consite en una api rest desarrollada con [Express JS](https://expressjs.com/es) como framawork web de [Node JS](https://nodejs.org/en/) y se usó [Mongo DB](https://www.mongodb.com/es/) como sistema de base de datos haciendo uso del ODM [Mongoose](https://mongoosejs.com/).

### Módulos utilizados

-cors: v2.8.5 permite el intercambio de datos de los dos servidores
-date-fns: v2.23.0 permite el trabajo con fechas
-express: v4.17.1 framework web que permite el desarrollo de la api
-express-promise-router: v4.1.0 permite el manejo de las rutas
-mongoose: v5.13.8, permite el trabajo con los datos en la base de datos
-morgan: v1.10.0" middleware que permite la captura de solicitudes HTTP
-concurrently: v6.2.1" permite ejecutar los dos servidores en un solo script
-nodemon: v2.0.12" permite que se reinicie el servidor cada vez que se haga un cambio

## Frontend

    El frontend se desarrolló con la libreria javascript para la creación de interfases de usuario [React JS](https://es.reactjs.org/).

### Módulos utilizados

    - ag-grid-react: v26.0.0, datatable que permite el trabajo con tablas de manera mas rapida
    - axios: v0.21.1, para consumir nuetra nuestra api
    - bootstrap: v5.1.0, para la creación de nuestras vistas
    - bootstrap-icons: v1.5.0, para la utilizacion de iconos
    - date-fns : v2.23.0, para el trabajo con las fechas
    - react-bootstrap: v1.6.1, para la creacion de las vistas
    - react-reveal: v1.2.2, para los efectos de animación
    - react-router-dom: v5.2.0, para el manejo de las rutas
    - react-toastify: v7.0.4, para el manejo de mensajes
    - react-tooltip: v4.2.21, para el mejor entendimiento de la aplicación
    - redux: v4.1.1", para el manejo de el estado global de nuestra aplicación
    - redux-saga: v1.1.3, como middleware de redux
    - validator: v13.6.0v, para el trabajo con las validaciones en formularios

## Ejecutar projecto en local

Antes de comenzar, asegúrese de haber instalado estas herramientas:

- [Node JS](https://nodejs.org/en/) - Versión LTS o más reciente..
- [NPM](https://www.npmjs.com/) – Normalmente viene con Node.
- [Git](https://git-scm.com/) – CLI de Git..

Para asegurarse de tener esta herramienta instalada, abra una terminal y escriba:

```
node --version
```

```
npm --version
```

```
git --version
```

esperando algo similar a (o versiones más nuevas):

```
node --version v14.17.0
```

```
npm --version 6.14.13
```

```
git --version 2.23.0
```

Una vez que haya instalado `node` `npm` y `git`, puede descargar/instalar este proyecto:

```
git clon https://github.com/Yoiset2021/gestion-universitaria.git
cd gestion-universitaria
npm install
npm start
```

Después abra [http://localhost:3000](http://localhost:3000) para verlo en el navegador
