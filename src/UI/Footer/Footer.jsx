import React from "react";
import "./styleFooter.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-1">
        <div className="container-fluid qwerty">
          <hr className="text-secondary" />
          

          <div className="row footer_info_wrapp">
            <div className="col-2 footer-logo d-flex align-items-center">
              <img
                src="https://www.cybersecurity-help.cz/upload/iblock/c16/p2wz2cvkp16vk2vg232hijgvd3a2nq3b.png"
                alt="footer-logo"
                loading="lazy"
                className="footerLogo"
              />

              <p className="text-secondary ms-2 py-0 my-0">
                © {new Date().getFullYear()} GitHub, Inc.
              </p>
            </div>

            <div className="col-10 footer_links d-flex justify-content-between align-items-center">
              <a href="#" className="footerLink">
                Terms
              </a>
              <a href="#" className="footerLink">
                Privacy
              </a>
              <a href="#" className="footerLink">
                Security
              </a>
              <a href="#" className="footerLink">
                Status
              </a>
              <a href="#" className="footerLink">
                Docs
              </a>
              <a href="#" className="footerLink">
                Contact GitHub
              </a>
              <a href="#" className="footerLink">
                Pricing
              </a>
              <a href="#" className="footerLink">
                API
              </a>
              <a href="#" className="footerLink">
                Training
              </a>
              <a href="#" className="footerLink">
                Blog
              </a>
              <a href="#" className="footerLink">
                About
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
