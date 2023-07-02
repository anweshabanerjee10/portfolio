import "./topbar.scss";

import EmailIcon from "@mui/icons-material/Email";

const Topbar = () => {
  return (
    <div className="topbar ">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .genius
          </a>

          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>banerjeeanwesha10@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
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
