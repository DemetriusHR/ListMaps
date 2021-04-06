import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const ReduxPage = lazy(() => import('../Pages/Redux'));
const ContextPage = lazy(() => import('../Pages/Context'));
const ApolloPage = lazy(() => import('../Pages/Apollo'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback="Carregando...">
      <Route path="/" component={ReduxPage} exact />
      <Route path="/context" component={ContextPage} exact />
      <Route path="/apollo" component={ApolloPage} exact />
    </Suspense>
  </BrowserRouter>
);

export default Routes;
