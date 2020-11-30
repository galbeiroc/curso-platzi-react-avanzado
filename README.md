# React-avanzado ⚛️


Repositorio con el código del [React de Avanzado]

#### 01 - Webpack
Paso 1: Instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
npx webpack src/index.js sustituye a node_modules\.bin\webpack src/index.js
windows "./node_modules/.bin/webpack" src/index.js

Paso 2: En la carpeta llamada src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').

Paso 3: Crear el root del proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack

Paso 4: Instalar html-webpack-plugin con: npm i html-webpack-plugin --save-dev.

Paso 5: Instalar webpack-dev-server con: npm i webpack-dev-server --save-dev.

Paso 6: Añadir un script llamado dev: "dev": "webpack-dev-server".


#### 02 - React, Babel
paso 1: Instalar  npm i react react-dom

`import React from 'react';`
`import ReactDOM from 'react-dom';`

`ReactDOM.render('Hola galbeiroc', document.body);`

paso 3: create file index.html

`new HtmlWebpackPlugin({ template: 'src/index.html'})`

paso 2: Instalar npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev para transpilar código jsx a JavaScript Vanilla


#### 03 - Eslint

paso 1: Instalar standard como linter npm install standard

paso 2: Config vercel.json para el deploy app y la api

#### 04 - Styled-component y creación componente Category

paso 1: Instalar styled-componentnpm  install styled-components   *https://styled-components.com/*

`const Button = styled.button``
 `border-radius: 4px;`
 `${props => props.accent && `
 `background: red;`
 `color: #fff;`
 `}`


`render () {`
  `return (`
    `Click here! `
  `)`
`}`

paso 2: Creación del componente Category usando styled-components

#### 05 - Creación componente LitsOFCategories y uso createGlobalStyle de Styled-components

paso 1: Creación componente LitsOFCategories y estilos con Styled-components

paso 2: Implementacion de createGlobalStyle en el archivo GlobalStyles

`import { createGlobalStyle } from 'styled-components'`

`export const GlobalStyles = createGlobalStyle``
  `html {`
    `box-sizing: border-box;`
    `font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`
  `}`

  `*, *:before, *:after {`
    `box-sizing: inherit;`
  `}`

#### 06 - Creación componente PhotoCard y ListOfPhotoCard

paso 1: Creación componente PhotoCard y estilos con Styled-components
paso 2: Instalar react-icons npm i react-icons para los icons  *https://react-icons.github.io/react-icons/*
paso 3: Creación componente ListOfPhotoCard y estilos con Styled-components

#### 07 - Creación Logo en SVG y Agregar animación

paso 1: Crear un svg *https://maketext.io/*

paso 2: Limpiar y comprimir svg *https://jakearchibald.github.io/svgomg/*

paso 3: Crear un svg en component de React *https://react-svgr.com/playground/*

paso 4: Agregar animación al ListOfPhotoCard, usando keyframes de Styled-components

#### 08 - Fijar las categorias

paso 1: Implement useEffect y useState para fijar categorias

`const [showFixed, setShowFixed] = useState(false)`

  `useEffect(() => {`

    `const onScroll = e => {`

      `const newShowFixed = window.scrollY > 190`

      `showFixed !== newShowFixed && setShowFixed(newShowFixed)`

    `}`

    `document.addEventListener('scroll', onScroll)`

    `return () => document.removeEventListener('scroll', onScroll)`
  `}, [showFixed])`
  
  `}`

paso 2: Create custom hook useCategoryData

#### 09 - Uso de Intersection Observer y uso de useRef

paso 1: Implementación useRef para tomar la referecia del elemento article

`const element = useRef(null)`

paso 2: Crear observador, para ver todas las entradas de viewport

  `useEffect(() => {

    const observer = new window.IntersectionObserver((entries) => {

      const { isIntersecting } = entries[0]

      if (isIntersecting) {

        setShow(true)

        observer.disconnect()

      }

    })

    observer.observe(element.current)

  }, [element])`

#### 09 - Instalación y uso de polyfill intersection-observer.
1: Con el fin que otros navegadores soporten intersection observer, al instalar el polyfill lo que hace
es parchear el objeto window. 
https://caniuse.com/?search=intersection%20observer
2. npm install babel-eslint --save-dev, es un parseador de eslint

`useEffect(() => {

    Promise.resolve(

      typeof window.IntersectionObserver !== 'undefined'

        ? window.IntersectionObserver

        : import('intersection-observer')

    ).then(() => {

      const observer = new window.IntersectionObserver((entries) => {

        const { isIntersecting } = entries[0]

        if (isIntersecting) {

          setShow(true)

          observer.disconnect()

        }

      })
      observer.observe(element.current)

    })

  }, [element])`

#### 09 - GraphQL
###### GraphQL: es un lenguaje de consulta y manipulación de datos para APIs.
###### Apollo: Es un cliente que nos permite conectarnos a un servidor de GraphQl.
npm i apollo-boost  => Es un tool que nos permite inicializar nuestra conexión con un server de apollo rapidamente
npm i react-apollo => Libreria que es la integración  de react con el cliente apollo

###### Config GraphQL
`index.js`
`
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

  const client = new ApolloClient({
    uri: 'https://petgram-server-acg-cp4ksptuq.vercel.app/graphql'
  })

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, document.getElementById('app')
  )
`
`ListOfPhotoCard`
`
import { graphql } from 'react-apollo'

import { gql } from 'apollo-boost'

Query:

const withPhotos = graphql(gql`

  query getPhotos {

    photos {

      id,

      categoryId,

      src,

      likes,

      userId,

      liked

    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {

  return (

    <ul>

      {

        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)

      }

    </ul>

  )
}
//HOC
export const ListOfPhotoCard = withPhotos(ListOfPhotoCardsComponent)
`
