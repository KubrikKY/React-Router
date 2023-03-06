import classes from './Cars.module.css';

const Car = (props) => {
  return (
    <div className={classes.Car}>
      <h3>{props.car}</h3>
      <strong>{props.year}</strong>
    </div>
  );
};

export default Car;
