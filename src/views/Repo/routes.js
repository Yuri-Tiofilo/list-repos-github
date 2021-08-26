import Repo from './'

const repoRoutes = [
  {
    path: '/repository/:name/:owner',
    component: Repo,
    exact: true,
    isPrivate: false,
    middlewares: []
  }
]

export default repoRoutes
