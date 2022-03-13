import { ApiService } from '.';

export const getOrganizations = async () => {
    return ApiService<any>('GET', 'user/organizations');
};

export const getOrganizationMembership = async () => {
    return ApiService<any>('GET', 'user/organization_memberships');
};

export const getOrganizationUsers = async () => {
    return ApiService<any>('GET', 'user/organization/users');
};
