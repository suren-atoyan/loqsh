import React from 'react';

import { Router, Route } from '@urban-bot/core';
import routes from 'routes';

function Content() {
  return (
    <Router>
      {routes.map(({ component: Component, ...props }) => (
        <Route {...props} key={props.path}>
          <Component />
        </Route>
      ))}
    </Router>
  );
}

export default Content;
