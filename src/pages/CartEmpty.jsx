import React from 'react';
import { Link } from 'react-router-dom';

import cartEmpyIcon from '../assets/img/empty-cart.png';

function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>Кошик пустий 😕</h2>
      <p>
        Виберіть хоча би одну піццу.
        <br />
        Для того, щоб замовити піццу, перейдіть на головну сторінку.
      </p>
      <img src={cartEmpyIcon} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
