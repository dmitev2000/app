import "./ScrollTopButton.css";

function ScrollTopButton() {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.getElementById("scroll-btn").style.display = "block";
    } else {
      document.getElementById("scroll-btn").style.display = "none";
    }
  };

  function onclick_handler() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div id="scroll-btn" onClick={onclick_handler}></div>
  );
}

export default ScrollTopButton;
