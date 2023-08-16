import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import { FetchContext } from '../providers/FetchProvider';

export default function Header({ title, profile, search }) {
  const history = useHistory();
  const [searchInputEnable, setSearchInputEnable] = useState(false);
  const {
    setHaveCategory,
  } = useContext(FetchContext);

  const redirectProfile = () => {
    history.push('/profile');
    setHaveCategory(false);
  };

  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>
      <button
        data-testid="btn-profile"
        onClick={ redirectProfile }
        aria-label="Abrir perfil"
      >
        {profile && (
          <img
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
          />
        )}
      </button>
      { search
      && (
        <button
          onClick={ () => setSearchInputEnable(!searchInputEnable) }
        >
          <img
            src={ searchIcon }
            alt="search-icon"
            data-testid="search-top-btn"
          />
        </button>
      )}
      {
        searchInputEnable
          && <SearchBar />
      }
      {' '}

    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  profile: PropTypes.bool,
  search: PropTypes.bool,
}.isRequired;
