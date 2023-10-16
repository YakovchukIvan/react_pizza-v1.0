// import classNames from 'classnames';

// Функціональний компонент

const Button = ({ onClick, children, className }) => {
  // console.log(onClick);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;

// Класовий компонент

// class Button extends React.Component {
//   render() {
//     return <button>Додати</button>;
//   }
// }

// export default Button;
