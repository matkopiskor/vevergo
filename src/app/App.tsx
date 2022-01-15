import { FC, Suspense } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import { Topbar } from '../components/topbar';
import { Footer } from '../components/footer';

import { Home } from '../pages/home';
import { NoResult } from '../pages/no-result';
import { AdDetails } from '../pages/ad-details';
import { Login } from '../pages/login';
import { MyItems } from '../pages/my-items';

import { useApp } from './useApp';
import { FavoriteItems } from '../pages/favorite-items';
import UserProfile from '../pages/user-profile/UserProfile';

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

export const App: FC = () => {
    const { loaded, isLoggedIn } = useApp();
    if (!loaded) {
        return null;
    }
    return (
        <div className="app-container">
            {/* ONLY FOR GITHUBPAGES */}
            <Router>
                <Suspense fallback={() => <div>Loading</div>}>
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ad/*" element={<AdDetails />} />
                        {!isLoggedIn && <Route path={'/login'} element={<Login />} />}
                        {!!isLoggedIn && (
                            <>
                                <Route path="/my-items" element={<MyItems />} />
                                <Route path="/favorite-items" element={<FavoriteItems />} />
                                <Route path="/profile" element={<UserProfile />} />
                            </>
                        )}
                        <Route path="*" element={<NoResult />} />
                    </Routes>
                </Suspense>
            </Router>
            <Footer />
        </div>
    );
};
