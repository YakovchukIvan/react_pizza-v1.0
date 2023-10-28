import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = [
  "М'ясні",
  'Вегетерінаські',
  'Гриль',
  'Гострі',
  'Закриті',
];
const sortItems = [
  { name: 'популярність', type: 'popular' },
  { name: 'ціна', type: 'price' },
  { name: 'алфавіт', type: 'alphabet' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(category);
  console.log(sortBy);
  useEffect(() => {
    // з допомогою redux витягуємо наші товари з бек-енда
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>

      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
