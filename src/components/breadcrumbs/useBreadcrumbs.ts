import { useCallback, useMemo } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { findSelectedIds } from '../../utils/findSelectedIds';
import { findSelectedNames } from '../../utils/findSelectedNames';
import { useAppHistory } from '../../utils/useAppHistory';

export const useBreadcrumbs = () => {
    const { goTo, state, path } = useAppHistory();
    const categoryTree = useAppSelector((state) => state.categoryTree.tree);

    const { sidebarFilters } = state ?? {};

    const onBreadcrumbClick = useCallback(
        (id: number) => {
            const selectedIds = findSelectedIds(categoryTree, id);
            goTo(path, false, { sidebarFilters: selectedIds });
        },
        [categoryTree, goTo, path]
    );

    const breadcrumbs: { id: number; name: string }[] = useMemo(() => {
        if (!sidebarFilters || sidebarFilters.length === 0) {
            return [];
        }
        const names = findSelectedNames(categoryTree, sidebarFilters[sidebarFilters.length - 1]);

        return sidebarFilters.map((id: number, idx: number) => {
            return {
                id,
                name: names[idx],
            };
        });
    }, [categoryTree, sidebarFilters]);

    return {
        onBreadcrumbClick,
        breadcrumbs,
    };
};
