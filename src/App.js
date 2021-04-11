import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const Main = loadable(() => import('pages/Main.js'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>...loading</div>}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
