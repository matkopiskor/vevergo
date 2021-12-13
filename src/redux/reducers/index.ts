import { combineReducers } from 'redux';
import loading from './loadingReducer';
import mainPageFilter from './mainPageFilter';
import currencies from './currenciesReducer';
import languages from './langugagesReducer';
import countries from './countriesReducer';
import categoryTree from './categoryTreeReducer';

const rootReducer = combineReducers({
    loading,
    mainPageFilter,
    currencies,
    languages,
    countries,
    categoryTree,
});

export default rootReducer;
