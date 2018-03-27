// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import GetInvolved from './GetInvolved'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [{
    path: 'get-involved',
    component: CoreLayout,
    indexRoute: GetInvolved
  }
  ]
})

export default createRoutes
