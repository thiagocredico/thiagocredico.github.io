import React from 'react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testa os elementos do componente NotFound.', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    const { getByRole } = renderWithRouter(<NotFound />);
    const notFound = getByRole('heading', {
      name: /Page requested not found/,
      level: 2,
    });
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { getByRole } = renderWithRouter(<NotFound />);
    const img = getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
