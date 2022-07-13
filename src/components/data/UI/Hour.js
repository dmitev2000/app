import './Hour.css';

function Hour({ info }) {
  //console.log(info);
  return <div className='hour-card'>
    <h5>Time: {info.time.split(" ")[1]}</h5>
    <hr />
    <img src={info.condition.icon} alt={info.condition.icon} />
    <h5 className='display-6'>{Math.floor(info.temp_c)}°C</h5>
    <hr />
    <p>{info.condition.text}</p>
  </div>;
}

export default Hour;
