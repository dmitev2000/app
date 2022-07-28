import "./Footer.css";

function Footer() {
  const date = new Date();

  return (
    <footer>
      <div>Copyright &copy; Dario Mitev, {date.getFullYear()}</div>
      <div className="d-flex justify-content-space-between">
        <a href="!#">
          <i className="bi bi-facebook text-primary" />
        </a>{" "}
        <a href="!#">
          <i className="bi bi-twitter twitter" />
        </a>
        <a href="!#">
          <i className="bi bi-instagram insta" />
        </a>
        <a href="!#">
          <i className="bi bi-github text-dark" />
        </a>
        <a href="!#">
          <i className="bi bi-google google" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
