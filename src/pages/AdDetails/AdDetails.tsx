import { FC } from 'react';
import { PageContainer } from '../../components/page-container';
import { useAdDetails } from './useAdDetails';

import './AdDetails.css';

const AdDetails: FC = () => {
    const { ad } = useAdDetails();
    return (
        <PageContainer>
            <div className='ad-details'>{ad.item.title}</div>
        </PageContainer>
    );
};

export default AdDetails;
