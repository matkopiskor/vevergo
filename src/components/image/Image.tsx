import { FC } from 'react';
import './Image.css';

interface IProps {
    src: string;
}
export const Image: FC<IProps> = ({ src }) => {
    const props: any = {};

    return (
        <div className="single-image">
            <img src={src} alt="single" {...props} />
        </div>
    );
};
