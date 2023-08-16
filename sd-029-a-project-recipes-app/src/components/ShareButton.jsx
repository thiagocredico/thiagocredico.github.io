import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

const TWO_SECONDS = 2000;

function ShareButton() {
  const history = useHistory();
  const { pathname } = history.location;
  const [linkCopied, setLinkCopied] = useState(false);
  const { id } = useParams();

  const mealsOrDrinks = pathname.includes('/drinks') ? '/drinks/' : '/meals/';

  const shareLink = () => {
    const link = `http://localhost:3000${mealsOrDrinks}${id}`;
    copy(link);
    setTimeout(() => setLinkCopied(false), TWO_SECONDS);
    setLinkCopied(true);
  };

  return (
    <>
      <button
        data-testid="share-btn"
        onClick={ () => shareLink() }
      >
        <img src={ shareIcon } alt="share-icon" />
      </button>
      {linkCopied && <span>Link copied!</span>}
    </>
  );
}

export default ShareButton;
