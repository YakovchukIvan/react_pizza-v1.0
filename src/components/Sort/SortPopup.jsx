import React, { useEffect, useRef, useState, memo } from 'react';

// memo тут потрібен щоб не виконувався лишній ререндер сторінки, коли ми вибираємо сортування товарів
const SortPopup = memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);

  // Створюємо useRef для оновлення сторінки коли нам треба, в нашому випадку коли нажали на сортування та якщо десь нажмемо в інше місце щоб заховався список сортування
  const sortRef = useRef();

  const activeLabel = items.find((obj) => obj.type === activeSortType).name;
  // console.log('SortPopup  activeLabel:', activeLabel);

  // це для відображення списку сортування
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  // для відстежування кліку на сторінці
  const handleOutsideClick = (e) => {
    // ця хитра перевірка допомогає відслідкувати чи проводився ще десь клік, окрім sortRef(в нас тут блок sort)
    if (e.target.offsetParent !== sortRef.current) {
      setVisiblePopup(false);
      // console.log('Ховає');
    }
  };

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false); // коли якесь значення з сортування буде вибрано, ми ховаємо список сортування
  };

  // коли ми нажимаємо будь де на сторінці, наш клік буде відображатися
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    // console.log(sortRef.current);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортування по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items && // Якщо items зберігає true то функція виконається, якщо буде false(undefined, null) то функція не виконається
              items.map((obj, index) => (
                <li
                  key={`${obj.type}_${index}`}
                  className={activeSortType === obj.type ? 'active' : ''}
                  onClick={() => onSelectItem(obj.type)}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
