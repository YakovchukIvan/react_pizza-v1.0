import React, { memo, useState } from 'react';

// memo тут потрібен щоб не виконувався лишній ререндер сторінки, коли ми вибираємо категорії товарів
const Categories = memo(function Categories({ items, onClickItem }) {
  // // console.log(items);

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Вся продукція
        </li>
        {items && // Якщо items зберігає true то функція виконається, якщо буде false(undefined, null) то функція не виконається
          items.map((name, index) => (
            <li
              key={`${name}_${index}`}
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
