import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5173/db.json').then(({ data }) => {
      // store.dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={[]} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
