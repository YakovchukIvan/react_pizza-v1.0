import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
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

  useEffect(() => {
    // з допомогою redux витягуємо наші товари з бек-енда
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>

      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
