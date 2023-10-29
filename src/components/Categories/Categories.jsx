import React, { memo } from 'react';
import PropTypes from 'prop-types';

// memo тут потрібен щоб не виконувався лишній ререндер сторінки, коли ми вибираємо категорії товарів
const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Вся продукція
        </li>
        {items && // Якщо items зберігає true то функція виконається, якщо буде false(undefined, null) то функція не виконається
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
