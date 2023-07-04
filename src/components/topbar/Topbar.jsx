import "./topbar.scss";

import EmailIcon from "@mui/icons-material/Email";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .Anwesha
          </a>

          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>banerjeeanwesha10@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={handleClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
