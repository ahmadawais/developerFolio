import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import A from "../../components/Basic/A";

const Contact = () => (
  <Fade bottom duration={1000} distance="20px">
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h2 className="heading contact-title">{contactInfo.title}</h2>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
          <div className="contact-text-div">
            <A className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </A>
            <br />
            <br />
            <A
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </A>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt="Saad Working"
            src={require("../../assets/images/contactMail.webp")}
          />
        </div>
      </div>
    </div>
  </Fade>
);

export default Contact;
