import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component: React.ReactElement, initialPath = '/') => {
  return render(<MemoryRouter initialEntries={ [initialPath] }>{component}</MemoryRouter>);
};
export default renderWithRouter;
