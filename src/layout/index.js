import React from 'react'
import { Router, Switch } from 'react-router-dom'

import history from '~/utils/history'
import routes from '~/routes'
import Route from '~/layout/Route'
import Forbidden from '~/layout/Forbidden'
import { Header, Footer } from '~/components'

import GlobalStyles from '~/styles/globalStyles'

function Layout() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router history={history}>
        <Switch>
          {routes.map((route, key) => {
            return (
              <Route
                key={key}
                path={route.path}
                component={route.component}
                exact={route.exact}
                middlewares={route.middlewares}
                isPrivate={route.isPrivate}
              />
            )
          })}
          <Route path="/acesso-proibido" component={Forbidden} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}
export default Layout
