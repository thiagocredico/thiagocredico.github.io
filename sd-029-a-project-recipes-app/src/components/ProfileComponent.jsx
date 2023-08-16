import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileComponent() {
  const user = JSON.parse(localStorage.getItem('user'));
  const storage = user && user.email;
  const handlerLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <div data-testid="profile-component">
      <section>
        <h5 data-testid="profile-email">{storage}</h5>
      </section>
      <section>
        <Link to="/favorite-recipes">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>

        <Link to="/done-recipes">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => handlerLogout() }
          >
            Logout
          </button>
        </Link>
      </section>
    </div>
  );
}
