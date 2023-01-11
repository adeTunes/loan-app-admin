import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Logo from "./assets/Group.png";
import userPics from "./assets/user-pics.png";
import ShowNav from "./Drawer";
import SearchPopover from "./SearchPopover";

function Header() {
  return (
    <header className="headerContainer">
      <img className="logoMobile" src={Logo} alt="" />
      <ShowNav screen="mobile" />

      {/* Not diplayed at mobile sized screen */}
      <div className="leftPartHeader">
        <img src={Logo} alt="" />
        <ShowNav screen="tablet" />
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            placeholder="Search for anything"
          />
          <button className="searchBtn">
            <Icon icon="material-symbols:search" color="white" />
          </button>
        </div>
        <SearchPopover />
      </div>

      {/* Not diplayed at tablet size screen */}
      <div className="rightPartHeader">
        <p className="linkPara">
          <a className="linkText" href="/">
            Docs
          </a>
        </p>
        <Icon
          className="notificationIcon"
          icon="mdi:bell-outline"
          height={26}
          width={26}
          color="#213F7D"
        />
        <div className="userProfile">
          <img className="userPics" src={userPics} alt="" />
          <div className="username">
            <p className="userSurname">Adedeji</p>
            <Icon icon="ic:twotone-arrow-drop-down" />
          </div>
          <Link to="/login">
          <Icon style={{cursor: "pointer"}} height={24}
          width={24} color="#213F7D" icon="mdi-light:logout" />
          </Link>
        </div>
      </div>

      {/* Displayed on the right side of header at tab sized screen */}
      <div className="userProfileTab">
        <img className="userPics" src={userPics} alt="" />
        <Icon icon="ic:twotone-arrow-drop-down" />
        <Link to="/login">
          <Icon style={{cursor: "pointer"}} height={24}
          width={24} color="#213F7D" icon="mdi-light:logout" />
          </Link>
      </div>
    </header>
  );
}

export default Header;
