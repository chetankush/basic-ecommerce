import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
       
       <h1>ArtStore</h1>
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        /> */}
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/LoginPage"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionlineOne">
              Hello,{!user ? "Guest" : user.email}
            </span>
            <span className="header_optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/Orders">
          <div className="header_option">
            <span className="header_optionlineOne">Returns</span>
            <span className="header_optionlineTwo">Orders</span>
          </div>
        </Link>
        <div className="header_optionbasket">
          <Link to="/checkout">
            <LocalMallIcon />
            <span
              className="header_optionlineTwo
                  header_basketCount"
            >
              {basket?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
