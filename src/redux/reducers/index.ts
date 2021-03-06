import { combineReducers } from 'redux';
import loading from './loadingReducer';
import mainPageFilter from './mainPageFilter';
import currencies from './currenciesReducer';
import languages from './langugagesReducer';
import countries from './countriesReducer';
import categoryTree from './categoryTreeReducer';
import listingTypes from './listingTypesReducer';
import homeView from './homeViewReducer';
import sidebar from './sidebarReducer';
import user from './userReducer';
import organizations from './organizationsReducer';
import timezones from './timezonesReducer';

const rootReducer = combineReducers({
    loading,
    mainPageFilter,
    currencies,
    languages,
    countries,
    categoryTree,
    listingTypes,
    homeView,
    sidebar,
    user,
    organizations,
    timezones,
});

export default rootReducer;
