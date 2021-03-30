import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const ReduxPage = lazy(() => import('../Pages/Redux'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback="Carregando...">
      <Route path="/" component={ReduxPage} exact />
    </Suspense>
  </BrowserRouter>
);

export default Routes;
