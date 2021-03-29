import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const InicialPage = lazy(() => import('../Pages/Inicial'));
const DetalhesPage = lazy(() => import('../Pages/Detalhes'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback="Carregando...">
      <Route path="/" component={InicialPage} exact />
      <Route path="/detalhes" component={DetalhesPage} exact />
    </Suspense>
  </BrowserRouter>
);

export default Routes;
