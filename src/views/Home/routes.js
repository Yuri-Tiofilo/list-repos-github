import Home from './'

const homeRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    isPrivate: false,
    middlewares: []
  }
]

export default homeRoutes
