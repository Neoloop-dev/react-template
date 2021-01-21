import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';

const AppRoutes = () => (
  <Switch>
    {routes.map(({ path, children }) => (
      <Route exact path={path}>
        {children}
      </Route>
    ))}
  </Switch>
);

export { AppRoutes };
