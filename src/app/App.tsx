import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from '../components/topbar';
import { Home } from '../pages/Home';
import { useApp } from './useApp';

import '../style.css';

export const App: FC = () => {
    const { loaded } = useApp();
    if (!loaded) {
        return null;
    }
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Suspense fallback={() => <div>Loading</div>}>
                    <Topbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<div>In development</div>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};
