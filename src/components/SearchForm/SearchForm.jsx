import PropTypes from 'prop-types';
import {
  FormContainer,
  Form,
  FormInput,
  FormButton,
} from './SearchForm.styled';
import { useState } from 'react';
import { Notify } from 'notiflix';

export default function SearchForm({ onSubmit, onChange }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
    onChange(evt.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      return Notify.info('Please enter your query!');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSearchSubmit}>
        <FormButton type="submit">
          <span>🔍</span>
        </FormButton>

        <FormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleQueryChange}
        />
      </Form>
    </FormContainer>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
