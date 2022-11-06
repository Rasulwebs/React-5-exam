import React, { useContext, useState, useEffect } from "react";
import "./style.scss";
import context from "../../context/context";
const Navbar = () => {
  const { sendUserName, sendUserData, sendFollowers, userData } =
    useContext(context);
  let [useNameValue, setUserNameValue] = useState("");

  sendUserName(useNameValue);
  sendUserData(useNameValue);
  sendFollowers(useNameValue);

  return (
    <>
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://www.cybersecurity-help.cz/upload/iblock/c16/p2wz2cvkp16vk2vg232hijgvd3a2nq3b.png"
                height="45 "
                className="navLogo"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <input
              type="text"
              className="form-control w-25 bg-dark text-light btn-outline-dark border border-secondary py-0"
              placeholder="Enter is name"
              value={useNameValue}
              onChange={(e) => {
                setUserNameValue(e.target.value);
              }}
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light navLinks" href="#">
                  Pull requests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light navLinks" href="#">
                  Issues
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light navLinks" href="#">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light navLinks" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
          <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell text-light"></i>
                <span className="badge rounded-pill badge-notification bg-primary ">
                  1
                </span>
              </a>
           

            <div className="dropdown">
            <a className="text-reset me-3" href="#">
            <i class="bi bi-plus-lg text-light"></i>
          
            </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              ></ul>
            </div>
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
               
                <img
                  src={userData.avatar_url}
                  className="rounded-circle fs-1"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
             
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              ></ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
