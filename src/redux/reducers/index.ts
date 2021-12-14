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
});

export default rootReducer;
