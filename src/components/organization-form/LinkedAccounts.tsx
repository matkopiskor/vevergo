import { FC } from 'react';
import { X } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Table } from 'reactstrap';
import './style.css';

interface IProps {
    users: any[];
    removeUser: (userId: string) => Promise<void>;
}

export const LinkedAccounts: FC<IProps> = ({ users, removeUser }) => {
    const [t] = useTranslation();

    if (users?.length !== 0) {
        return (
            <>
                <Table responsive bordered>
                    <thead>
                        <tr>
                            <th>{t('lblUsername')}</th>
                            <th>{t('lblName')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item) => {
                            const name: string[] = [];
                            if (item.first_name) {
                                name.push(item.first_name);
                            }
                            if (item.last_name) {
                                name.push(item.last_name);
                            }
                            return (
                                <tr key={item.id}>
                                    <td>{item.nickname}</td>
                                    <td>{name}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                removeUser(item.id);
                                            }}
                                        >
                                            <X size={15} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <button type="submit" className="organization-save-button">
                    {t('lblAddLinkedAccount')}
                </button>
            </>
        );
    }
    return (
        <>
            <Table responsive bordered>
                <thead>
                    <tr key={11}>
                        <td colSpan={3} className="text-align-center">
                            {t('lblNoData')}
                        </td>
                    </tr>
                </thead>
            </Table>
            <button type="button" className="organization-save-button">
                {t('lblAddLinkedAccount')}
            </button>
        </>
    );
};
