import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import AppLayout from 'components/common/AppLayout';
import axios from 'axios';

const Main = loadable(() => import('pages/Main.js'));

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'production site url'
    : 'http://localhost:8080';

console.log('env :', process.env.NODE_ENV);

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
