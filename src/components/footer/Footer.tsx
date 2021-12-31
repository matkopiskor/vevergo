import { FC } from 'react';
import { ArrowUp } from 'react-feather';
import ScrollToTop from 'react-scroll-up';
import { Button } from 'reactstrap';

import './Footer.css';

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <ScrollToTop showUnder={160}>
                <Button className="footer__button">
                    <ArrowUp size={15} />
                </Button>
            </ScrollToTop>
        </footer>
    );
};
