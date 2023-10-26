import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={["М'ясні", 'Вегетерінаські', 'Гриль', 'Гострі', 'Закриті']}
        />
        <SortPopup
          items={[
            { name: 'популярність', type: 'popular' },
            { name: 'ціна', type: 'price' },
            { name: 'алфавіт', type: 'alphabet' },
          ]}
        />
      </div>

      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
