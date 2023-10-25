import React from "react";
import footerStyles from "./Footer.module.css";
import companyLogo from "../../assets/brandLogo.png";
import { FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={footerStyles.footer}>
      <div className="container">
        <div className={footerStyles.footer__contents}>
          <div className={footerStyles.footer__left}>
            <img
              className={footerStyles.footer__image}
              src={companyLogo}
              alt=""
            />
          </div>
          <h2></h2>
          <div className={footerStyles.footer__right}>
            <h2 className="m-1">Team Web Wizards</h2>
            <div className={footerStyles.companyLocation}>
              <h2>
                <FaLocationArrow />
              </h2>
              <p>Vettersstraße 54 Chemnitz, Saxony, Germany</p>
            </div>
            <div className={footerStyles.companyEmail}>
              <h2>
                <MdEmail />
              </h2>
              <a
                href="mailto:webwizardsinfo@gmail.com?subject=Mail from your Site"
                className="m-1"
              >
                webwizardsinfo@gmail.com
              </a>
            </div>
            <div className={footerStyles.companyPhone}>
              <h2>
                <BsFillTelephoneFill />
              </h2>
              <a href="tel:+4915752491735" className="m-1">
                +4915752491735
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyles.copyright__text}>
        <small>
          Copyright &copy; <span id="copyright"> {year}</span> Web Wizards. All
          rights reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;
