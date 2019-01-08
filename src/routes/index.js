// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Volunteer from './Volunteer'
import Events from './Events'
import Team from './Team'
import Jobs from './Jobs'
import Donate from './Donate'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    {
      path: 'volunteer',
      indexRoute: Volunteer
    },
    {
      path: 'events',
      indexRoute: Events
    },
    {
      path: 'team',
      indexRoute: Team
    },
    {
      path: 'jobs',
      indexRoute: Jobs
    },
    {
      path: 'donate',
      indexRoute: Donate
    }
  ]
})

export default createRoutes
