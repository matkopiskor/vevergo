import { notification } from 'antd';
import { t } from 'i18next';

interface IArgs {
    message: string;
    description: string;
}

interface IParams {
    type: 'SUCCESS' | 'ERROR' | 'WARNING';
    message?: string;
    description: string;
}

export const notify = ({ type, message, description }: IParams) => {
    const args: IArgs = {
        description: t(description),
        message: '',
    };
    switch (type) {
        case 'SUCCESS': {
            args.message = message ?? t('lblSuccess');
            break;
        }
        case 'WARNING': {
            args.message = message ?? t('lblWarning');
            break;
        }
        case 'ERROR': {
            args.message = message ?? t('lblWarning');
        }
    }
    notification.open(args);
};
