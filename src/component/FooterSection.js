import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

function FooterSection() {
  return (
    <footer>
      <div className="footer-heading">
        <h1>Crime Hood</h1>
        <p>Making our community safer</p>
      </div>

      <div className="footer-icons">
        <AiFillFacebook color="#fff" size={30} />
        <AiFillTwitterSquare color="#fff" size={30} />
        <AiFillLinkedin color="#fff" size={30} />
        <AiFillInstagram color="#fff" size={30} />
      </div>
    </footer>
  );
}

export default FooterSection;
