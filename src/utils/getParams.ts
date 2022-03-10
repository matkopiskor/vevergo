export const getUserToken = () => {
    const user = localStorage.getItem('vvg-user');
    if (user) {
        try {
            return JSON.parse(user)?.token;
        } catch (err) {
            return null;
        }
    }
    return null;
};

export const getOrgId = () => {
    const orgId = localStorage.getItem('vvg-orgs');
    if (orgId) {
        return JSON.parse(orgId);
    }
    return null;
};
