import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './pages/Loading';
import NotLazy from './pages/NotLazy';

const Home = lazy(() => import('./pages/Home'));
const Lazy = lazy(() => import('./pages/Lazy'));
const NotFound = lazy(() => import('./pages/404'));

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="m-10">
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/lazy" exact>
                            <Lazy />
                        </Route>
                        <Route path="/eager" exact>
                            <NotLazy />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};
