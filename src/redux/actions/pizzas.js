import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:5174/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
