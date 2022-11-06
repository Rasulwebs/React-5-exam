import React, { useContext } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import context from "../../context/context";
const Sidbar = () => {
  const { userData } = useContext(context);
  return (
    <>
      <div className="sidebar_wrapp ">
        <div className="acc_img">
          <img
            src={userData.avatar_url}
            alt=""
            className="mx-auto avatar-img"
          />
        </div>
        <h2 className="acc_name py-0 my-0">{userData.name}</h2>
        <p className="acc_userName pt-0 mt-0">{userData.login}</p>

        <p className="acc_desc ">{userData.bio}</p>
        <button className="btn btn-secondary w-100 ">Edit Profile</button>
        <div className="follow_wrapp d-flex align-items-center mt-3 mb-3">
          <span className="followers mx-1">
            <Link to="/followers" className="text-secondary followLink">
              <i className="bi bi-people text-dark"></i>
              <span className="follower_length px-1 "><span className="text-dark">{userData.followers}</span></span>
              followers
            </Link>
          </span> 
          ·
          <span className="following mt-1 ">
            <Link to="/following" className="text-secondary followLink">
              <span className="following_length px-1">
                <span className="text-dark">

                {userData.following}
                </span>
              </span>
              following
            </Link>
          </span>
        </div>

        <div className="acc_info d-flex flex-column">
          <a href="#" className="mt-1 text-dark">
            <i className="bi bi-building px-2 text-dark"></i>
            Company:
            {userData.company}
          </a>

          <a href="https://goo.gl/maps/4P56Zp9rR4wBYCTFA" className="mt-1 text-dark">
          <i className="bi bi-geo-alt px-2 text-dark"></i>
            {userData.location}
          </a>

          <a href="https://t.me/boboqulovrasul" className="mt-1 text-dark tg_link">
          <i className="bi bi-link-45deg px-2 text-dark"></i>
            {userData.blog}
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidbar;
