import PropTypes from 'prop-types';

// Функціональний компонент

const Button = ({ onClick, children, className }) => {
  // console.log(onClick);
  return (
    <>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;

// Класовий компонент

// class Button extends React.Component {
//   render() {
//     return <button>Додати</button>;
//   }
// }

// export default Button;
