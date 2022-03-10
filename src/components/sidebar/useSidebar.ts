import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Category } from '../../redux/reducers/categoryTreeReducer';
import { setOpen, toggleDocked, setMobileOpen, toggleMobileOpen } from '../../redux/reducers/sidebarReducer';
import { findSelectedIds } from '../../utils/findSelectedIds';
import { useAppHistory } from '../../utils/useAppHistory';
import { useIsMobile } from '../../context/useIsMobile';
import { useTranslation } from 'react-i18next';

interface ISidebarItem {
    icon: string;
    id: number;
    name: string;
    children: ISidebarItem[];
    type: 'collapse' | 'item';
    active: boolean;
}

export const useSidebar = () => {
    const { t } = useTranslation();
    const { goTo, path, state } = useAppHistory();
    const dispatch = useAppDispatch();
    const isMobile = useIsMobile();
    const sidebarState = useAppSelector((state) => state.sidebar);
    const mobileOpen = useAppSelector((state) => state.sidebar.mobileOpen);

    const appliedFilters = useMemo(() => state?.sidebarFilters, [state?.sidebarFilters]);

    useEffect(() => {
        if (isMobile) {
            dispatch(setMobileOpen(false));
        }
    }, [dispatch, isMobile]);

    const categoryTree = useAppSelector((state) => state.categoryTree.tree);

    const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
        setSelected(appliedFilters ?? []);
    }, [appliedFilters]);

    const docked = useMemo(() => {
        if (isMobile) {
            return true;
        }
        return sidebarState?.docked;
    }, [sidebarState?.docked, isMobile]);

    const open = useMemo(() => {
        if (isMobile) {
            return mobileOpen;
        }
        return sidebarState?.open;
    }, [isMobile, mobileOpen, sidebarState?.open]);

    const onDockedClick = useCallback(() => {
        dispatch(toggleDocked());
    }, [dispatch]);

    const onSidebarMouseEnter = useCallback(() => {
        dispatch(setOpen(true));
    }, [dispatch]);

    const onSidebarMouseLeave = useCallback(() => {
        dispatch(setOpen(false));
    }, [dispatch]);

    const sidebarClassName = useMemo(() => {
        if (isMobile) return mobileOpen ? 'sidebar sidebar-mobile-open' : 'sidebar sidebar-mobile';
        return docked || open ? 'sidebar sidebar-docked' : 'sidebar sidebar-undocked';
    }, [docked, isMobile, open, mobileOpen]);

    const createSidebarItem = useCallback(
        (item: Category): ISidebarItem => {
            const { children, icon, id, name, is_last } = item;
            const itemChildren: ISidebarItem[] = is_last
                ? []
                : children.map((child: Category) => createSidebarItem(child));
            return {
                id,
                name,
                icon,
                children: itemChildren,
                type: is_last ? 'item' : 'collapse',
                active: selected.includes(id),
            };
        },
        [selected]
    );

    const sidebarTree = useMemo(
        () =>
            categoryTree.map((item) => {
                return createSidebarItem(item);
            }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selected]
    );

    const onItemClick = useCallback(
        (id: number) => {
            if (selected.includes(id)) {
                const obj = selected.reduce(
                    (acc, sId, idx) => {
                        if (id === sId) {
                            acc = { ...acc, isFound: true };
                        } else {
                            acc = { ...acc, sIds: [...acc.sIds, sId] };
                        }
                        return acc;
                    },
                    { sIds: [] as any[], isFound: false }
                );
                setSelected(obj.sIds);
            } else {
                const selectedIds = findSelectedIds(categoryTree, id);
                setSelected(selectedIds);
            }
        },
        [categoryTree, selected]
    );

    const onFilterClick = useCallback(() => {
        if (isMobile) {
            dispatch(setMobileOpen(false));
        }
        goTo(path, false, { sidebarFilters: selected });
    }, [dispatch, goTo, isMobile, path, selected]);

    const onSwipe = useCallback(() => {
        dispatch(toggleMobileOpen());
    }, [dispatch]);

    const isHome = useMemo(() => isMobile && path === '/', [isMobile, path]);

    useEffect(() => {
        if (isMobile && open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobile, open]);

    return {
        docked,
        open,
        onDockedClick,
        onSidebarMouseEnter,
        onSidebarMouseLeave,
        sidebarClassName,
        sidebarTree,
        onItemClick,
        onFilterClick,
        t,
        isMobile,
        onSwipe,
        isHome,
        mobileOpen,
        selected,
    };
};
