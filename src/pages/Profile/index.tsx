import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { signOutUserAction } from "@components/Redux/Actions/authenticationActions";

interface LogoutStateProps {
  logout: {
    success: string;
    message: string;
  };
}

const Profile: React.FC = () => {
  const history = useHistory();
  const response = useSelector((state: LogoutStateProps) => state.logout);
  const dispatch = useDispatch();

  const pushToLoginPage = () => {
    history.push("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("signIn") !== "true") {
      pushToLoginPage();
    }
  }, []);

  const _helperSignOut = () => {
    dispatch(signOutUserAction());
    console.log(response);
    if (response && response[0]?.success === "true") {
      localStorage.setItem("signIn", "false");
      pushToLoginPage();
    }
  };

  return (
    <div className="container">
      <h1>Profile page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        nihil soluta id eveniet est maiores, quas pariatur natus quis,
        voluptatibus minima rerum officia veniam vel asperiores cumque aperiam
        sed adipisci!
      </p>
      <button
        className="mt-4 btn btn-lg btn-dark btn-block"
        onClick={_helperSignOut}
      >
        Sign out
      </button>
    </div>
  );
};

export default Profile;
