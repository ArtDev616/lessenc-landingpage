import React from "react";
import Logo from "../Logo.js";
import HomePageLink from "../../pages/home/HomePageLink.js";
import OurPeoplePageLink from "../../pages/ourPeople/OurPeoplePageLink.js";
import OurMethodsPageLink from "../../pages/ourMethods/OurMethodsPageLink.js";
import ResidentialPageLink from "../../pages/residential/ResidentialPageLink.js";
import CommercialPageLink from "../../pages/commercial/CommercialPageLink.js";
import PhoneLink from "../links/PhoneLink.js";

import hamburgerIcon from "./hamburger-icon.png";
import closeButton from "./close-button.svg";

import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="SiteHeader">
    <div className="Logo">
      <Logo />
    </div>
    <nav>
      <ul role="menu">
        <li>
          <HomePageLink />
        </li>
        <li>
          <OurPeoplePageLink />
        </li>
        <li>
          <OurMethodsPageLink />
        </li>
        <li>
          <ResidentialPageLink />
        </li>
        <li>
          <CommercialPageLink />
        </li>
      </ul>
    </nav>
    <div className="PhoneNumber">
      <PhoneLink icon={true} />
    </div>
    <div className="MenuButton">
      <a href="#menu">
        <img alt="" src={hamburgerIcon} />
      </a>
    </div>
    <div className="Menu" id="menu">
      <div className="MenuHeader">
        <Logo />
        <div className="MenuClose">
          <a href="#">
            <img alt="close" src={closeButton} />
          </a>
        </div>
      </div>
      <div className="MenuContent">
        <a role="menuitem" href="/">
          Home
        </a>
        <a role="menuitem" href="/ourPeople">
          Our People
        </a>
        <a role="menuitem" href="/ourMethods">
          Our Methods
        </a>
        <a role="menuitem" href="/residential">
          Residential
        </a>
        <a role="menuitem" href="/commercial">
          Commercial
        </a>

        <div className="MenuPhoneNumber">
          <PhoneLink icon={true} />
        </div>
      </div>
    </div>
  </header>
);

export default SiteHeader;

// ./src/site/header/SiteHeader.js
