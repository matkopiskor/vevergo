import { combineReducers } from 'redux';
import loading from './loadingReducer';
import mainPageFilter from './mainPageFilter';
import currencies from './currenciesReducer';
import languages from './langugagesReducer';

const rootReducer = combineReducers({
    loading,
    mainPageFilter,
    currencies,
    languages,
});

export default rootReducer;
