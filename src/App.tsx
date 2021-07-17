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
                <Suspense fallback={Loading}>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/lazy" component={Lazy} exact />
                        <Route path="/eager" component={NotLazy} exact />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};
