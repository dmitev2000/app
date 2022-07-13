import Hour from "./Hour";
import './HourList.css';

function HourList({ list }) {
  let key = 100;
  //console.log(list);
  return (
    <div className="hour-container">
      {list.map((hour) => {
        return <Hour key={key--} info={hour} />;
      })}
    </div>
  );
}

export default HourList;
