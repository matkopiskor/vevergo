import { useState } from 'react';

export const useMyItems = () => {
    const [activeTab, setActiveTab] = useState<string>('1');
    return { activeTab, setActiveTab };
};
