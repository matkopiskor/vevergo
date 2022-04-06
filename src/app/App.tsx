import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Topbar } from '../components/topbar';
import { Footer } from '../components/footer';

import { Home } from '../pages/home';
import { NoResult } from '../pages/no-result';
import { AdDetails } from '../pages/ad-details';
import { Login } from '../pages/login';
import { MyItems } from '../pages/my-items';

import { useApp } from './useApp';
import { FavoriteItems } from '../pages/favorite-items';
import { UserProfile } from '../pages/user-profile';
import { OrganizationProfile } from '../pages/organization-profile';
import { Register } from '../pages/register';
import { ConfirmationEmail } from '../pages/confirmation-email';
import { ChangeEmailConfirmation } from '../pages/change-email-confirmation';

export const App: FC = () => {
    const { loaded, isLoggedIn, isOrg } = useApp();
    if (!loaded) {
        return null;
    }
    return (
        <div className="app-container">
            {/* ONLY FOR GITHUBPAGES */}
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Suspense fallback={() => <div>Loading</div>}>
                    <Topbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ad/:id/*" element={<AdDetails />} />
                        {!isLoggedIn && (
                            <>
                                <Route path={'/login'} element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/confirmation-email" element={<ConfirmationEmail />} />
                                <Route path="/change-email" element={<ChangeEmailConfirmation />} />
                            </>
                        )}
                        {!!isLoggedIn && (
                            <>
                                <Route path="/my-items" element={<MyItems />} />
                                <Route path="/favorite-items" element={<FavoriteItems />} />
                                {isOrg ? (
                                    <Route path="/organization" element={<OrganizationProfile />} />
                                ) : (
                                    <Route path="/profile" element={<UserProfile />} />
                                )}
                            </>
                        )}
                        <Route path="*" element={<NoResult />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <Footer />
        </div>
    );
};
