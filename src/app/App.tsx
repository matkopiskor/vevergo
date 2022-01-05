import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from '../components/topbar';
import { Home } from '../pages/Home';
import { useApp } from './useApp';
import { NoResult } from '../pages/NoResult';

import '../style.css';
import { BASE_URL } from '../constants/baseUrl';
import { Footer } from '../components/footer';
import { AdDetails } from '../pages/AdDetails';
import { Login } from '../pages/Login';

export const App: FC = () => {
    const { loaded, isLoggedIn } = useApp();
    if (!loaded) {
        return null;
    }
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Suspense fallback={() => <div>Loading</div>}>
                    <Topbar />
                    <Routes>
                        <Route path={`${BASE_URL}/`} element={<Home />} />
                        <Route path={`${BASE_URL}/ad/*`} element={<AdDetails />} />
                        {!isLoggedIn && <Route path={`${BASE_URL}/login`} element={<Login />} />}
                        <Route path='*' element={<NoResult />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <Footer />
        </div>
    );
};
