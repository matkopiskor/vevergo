import { ApiService } from '.';

export const getOrganizations = async () => {
    return ApiService<any>({ method: 'GET', url: 'user/organizations' });
};

export const getOrganizationMembership = async () => {
    return ApiService<any>({ method: 'GET', url: 'user/organization_memberships' });
};

export const getOrganizationUsers = async () => {
    return ApiService<any>({ method: 'GET', url: 'user/organization/users' });
};

export const updateOrganization = async (data: any) => {
    return ApiService<any>({ method: 'PUT', url: 'user/organization', data, excludeOrg: true });
};

export const deleteOrganization = async (id: string) => {
    return ApiService<any>({ method: 'DELETE', url: 'user/organization/' + id });
};
