import { FC } from 'react';

import './ModalSection.css';

interface Props {
    title: string;
}

export const ModalSection: FC<Props> = ({ title, children }) => {
    return (
        <div className='modal-section'>
            <h4>{title}</h4>
            {children}
        </div>
    );
};
