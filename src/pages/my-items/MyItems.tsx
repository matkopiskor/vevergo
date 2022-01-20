import { FC } from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';

import { PageTitle } from '../../components/page-title/PageTitle';
import { MyItemsPublished } from '../../components/my-items-published';
import { MyItemsUnpublished } from '../../components/my-items-unpublished';
import { TabView } from '../../components/tab-view';

import './MyItems.css';
import { useMyItems } from './useMyItems';

const { TabPane } = Tabs;

const MyItems: FC = () => {
    const { t } = useTranslation();
    const { publishedItems, unpublishedItems } = useMyItems();
    return (
        <div className="my-items">
            <div>
                <PageTitle title={t('lblMyItems')} />
            </div>
            <TabView>
                <TabPane tab={t('lblPublished')} key="1">
                    <MyItemsPublished items={publishedItems} />
                </TabPane>
                <TabPane tab={t('lblUnpublished')} key="2">
                    <MyItemsUnpublished items={unpublishedItems} />
                </TabPane>
            </TabView>
        </div>
    );
};

export default MyItems;
