import React from 'react';

import { Categories, PizzaBlock, SortPopup } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["М'ясні", 'Вегетерінаські', 'Гриль', 'Гострі', 'Закриті']}
        />
        <SortPopup items={['популярність', 'ціна', 'алфавіт']} />
      </div>

      <h2 className="content__title">Всі піцци</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
