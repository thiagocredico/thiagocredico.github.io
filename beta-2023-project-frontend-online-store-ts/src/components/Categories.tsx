import React, { useCallback, useEffect, useState } from 'react';
import * as api from '../services/api';

type CategoriesData = {
  name: string,
  id: string,
};

interface CategoryProps {
  selectCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Categories(props: CategoryProps) {
  const [categories, setCategories] = useState<CategoriesData[]>([]);
  const { selectCategory } = props;

  const fetchCategories = useCallback(async () => {
    try {
      const categoriesData = await api.getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <section>
      {categories.map(({ id, name }) => (
        <div key={ id }>
          <label htmlFor={ id } data-testid="category">
            <input
              type="radio"
              name="categories"
              id={ id }
              value={ id }
              onChange={ selectCategory }
            />
            {name}
          </label>
        </div>
      ))}
    </section>
  );
}
