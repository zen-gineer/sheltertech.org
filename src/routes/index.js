// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import GetInvolved from './GetInvolved'
import Events from './Events'
import Team from './Team'
import Donate from './Donate'
import GivingTuesday from './GivingTuesday'
import AnnualReport from './AnnualReport2018'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    {
      path: 'get-involved',
      indexRoute: GetInvolved
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
      path: 'donate',
      indexRoute: Donate
    },
    {
      path: 'givingtuesday',
      indexRoute: GivingTuesday
    },
    {
      path: 'annual-report-2018',
      indexRoute: AnnualReport
    }
  ]
})

export default createRoutes
