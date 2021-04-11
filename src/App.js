import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';

const Main = loadable(() => import('pages/Main.js'));

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Suspense>
      </AppLayout>
    </Router>
  );
}

export default App;
