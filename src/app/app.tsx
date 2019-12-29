import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { ROUTES } from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTES.map(r => (
          <Route path={r.path} component={r.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
