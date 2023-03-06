import Car from './Car';
import classes from './Cars.module.css';

const Cars = ({ cars }) => {
  return (
    <div className={classes.Cars}>
      {cars.map((e, i) => {
        return <Car car={e.car} year={e.year} ket={i} />;
      })}
    </div>
  );
};

export default Cars;
