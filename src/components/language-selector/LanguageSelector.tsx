import { FC } from 'react';

import { useLanguageSelector } from './useLanguageSelector';

import './LanguageSelector.css';

export const LanguageSelector: FC = () => {
    const { active, list } = useLanguageSelector();
    return <div></div>;
};
