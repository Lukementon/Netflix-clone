import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Nav.css";

const Nav = () => {
  const { subscription } = useSelector(state => state.user);
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const isSubscribed = () => {
    if (subscription) {
      history.push("/");
    } else {
      history.push("/profile");
    }
  };

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={isSubscribed}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
