import { useCallback, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImgNoUser } from '../../assets';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { clearOrgs, removeActive } from '../../redux/reducers/organizationsReducer';
import { clearData } from '../../redux/reducers/userReducer';
import { getImage } from '../../utils/getImage';
import { useAppHistory } from '../../utils/useAppHistory';
import { useOutsideClickListener } from '../../utils/useOutsideClickListener';

const getImgSrc = (isLoggedIn: boolean, isOrg: boolean, user: any, orgs: any[], orgId?: string) => {
    if (!isLoggedIn) {
        return null;
    }
    if (!isOrg && !user) {
        return null;
    }
    if (!isOrg) {
        return getImage(user.profile_image);
    }
    const org = orgs.find(({ id }) => id === orgId);
    if (!org) {
        return null;
    }
    if (!org.profile_image) {
        return null;
    }
    return getImage(org.profile_image);
};

export const useUserSelector = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { goTo } = useAppHistory();
    const currRef = useRef(null);
    const [open, setOpen] = useState(false);
    const id = !!useAppSelector((state) => state.user.id);
    const isLoggedIn = useMemo(() => !!id, [id]);
    const orgId = useAppSelector((state) => state.organizations.active);
    const isOrg = !!orgId;
    const user = useAppSelector((state) => state.user.data);
    const orgsList = useAppSelector((state) => state.organizations.list);
    const orgsMems = useAppSelector((state) => state.organizations.membership);
    const toggleOpen = useCallback(
        (forceClose?: boolean) => {
            if (forceClose) {
                setOpen(false);
                return;
            }
            setOpen(!open);
        },
        [open]
    );

    useOutsideClickListener(currRef, () => toggleOpen(true));

    const imgSrc = useMemo(() => {
        const path = getImgSrc(isLoggedIn, isOrg, user, [...orgsList, ...orgsMems], orgId);
        if (!path) {
            return ImgNoUser;
        }
        return path;
    }, [isLoggedIn, isOrg, orgId, orgsList, orgsMems, user]);

    const logout = useCallback(() => {
        dispatch(clearData());
        dispatch(clearOrgs());
        goTo('/', false, {});
    }, [dispatch, goTo]);

    const backToPersonal = useCallback(() => {
        dispatch(removeActive());
        goTo('/', false, {});
    }, [dispatch, goTo]);

    return {
        currRef,
        imgSrc,
        open,
        toggleOpen,
        isLoggedIn,
        t,
        logout,
        isOrg,
        backToPersonal,
    };
};
