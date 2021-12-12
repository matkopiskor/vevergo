import { FC } from 'react';

import { AutoComplete, Input } from 'antd';

import './Autocomplete.css';
import { useAutocomplete } from './useAutocomplete';
import { Search } from 'react-feather';

interface IAutocompleteProps {
}

export const Autocomplete: FC<IAutocompleteProps> = () => {
    const { t, options, onSearch, onSelect, onEnterPressed } = useAutocomplete();
    return (
        <AutoComplete className="autocomplete" options={options} allowClear onSearch={onSearch} onSelect={onSelect} onKeyDown={onEnterPressed} >
            <Input className="autocomplete__input" placeholder={t('lblSearch')} prefix={<Search className="autocomplete__search-icon"/>} />
        </AutoComplete>
    )
};
