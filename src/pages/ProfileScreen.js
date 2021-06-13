import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

const ProfileScreen = () => {
  const { user, subscription } = useSelector(state => state.user);

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen_body">
        <h1>Edit Profile</h1>

        <div className="profileScreen_info">
          <img
            className="profileScreen_logo"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>
                Plans:
                {subscription
                  ? `(Current Plan: ${subscription})`
                  : "(Please choose from a plan listed below)"}
              </h3>
              <PlansScreen />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen_sign_out"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
