import Intro from "../components/home/Intro";
import AdvancedBox from "../components/home/AdvancedBox";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center page-title" style={{ color: "#f59b00" }}>
        Don't let the weather catch you by surprise
      </h1>
      <Intro />
      <AdvancedBox />
    </div>
  );
}

export default Home;
