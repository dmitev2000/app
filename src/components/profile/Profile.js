import "./Profile.css";
import caricature from "./caricature.png";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <h3>
          <i className="bi bi-person-circle"></i>Dario Mitev (22)
        </h3>
        <br />
        <p>
          <i className="bi bi-award"></i>Faculty of computer science and engineering
        </p>
        <p>
          <i className="bi bi-pc-display"></i>Front-end developer
        </p>
        <p>
          <i className="bi bi-filetype-tsx"></i>Typescript
        </p>
        <p>
          <i className="bi bi-filetype-jsx"></i>Javascript
        </p>
        <p>
          <i className="bi bi-activity"></i>React
        </p>
        <p>
          <i className="bi bi-filetype-html"></i>HTML
        </p>
        <p>
          <i className="bi bi-filetype-css"></i>CSS
        </p>
      </div>
      <div className="profile-image">
        <img src={caricature} alt="" />
      </div>
    </div>
  );
}

export default Profile;
