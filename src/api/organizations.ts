import { ApiService } from '.';

export const getOrganizations = async (extraHeaders?: any) => {
    return ApiService<any>({ method: 'GET', url: 'user/organizations', extraHeaders });
};

export const getOrganizationMembership = async (extraHeaders?: any) => {
    return ApiService<any>({ method: 'GET', url: 'user/organization_memberships', extraHeaders });
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

export const deleteOrganizationUser = async (userId: string) => {
    return ApiService<any>({ method: 'DELETE', url: 'user/organization/users/' + userId });
};
