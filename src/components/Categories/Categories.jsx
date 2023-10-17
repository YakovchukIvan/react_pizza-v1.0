import React, { useState } from 'react';

function Categories({ items }) {
  // // console.log(items);

  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
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
}

export default Categories;
