// import classNames from 'classnames';

// Функціональний компонент

const Button = (props) => {
  return (
    <>
      <button className="button">{props.text}</button>
    </>
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
