import Intro from "../components/home/Intro";
import AdvancedBox from "../components/home/AdvancedBox";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center page-title" style={{color: "#f59b00"}}>Lorem ipsum dolor sit amet.</h1>
      <Intro />
      <AdvancedBox />
    </div>
  );
}

export default Home;
