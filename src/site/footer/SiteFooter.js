import React from 'react';
import EmailLink from '../links/EmailLink.js';
import PhoneLink from '../links/PhoneLink.js';
import AddressLink from '../links/AddressLink.js';

import "./SiteFooter.css";

const SiteFooter = () => (
  <footer className="SiteFooter">

    <section className="RequestMeeting">
      <h1>Build Your Dream Home Today</h1>
      <p>
        <EmailLink text={<button> REQUEST A QUOTE </button>} />
      </p>
    </section>
    <section className="ContactUs">
      <h1>Contact us</h1>

      <figure>
        <figcaption>Address:</figcaption>
        <AddressLink />
      </figure>

      <figure>
        <figcaption>Phone:</figcaption>
        <PhoneLink />
      </figure>

      <figure>
        <figcaption>Email:</figcaption>
        <EmailLink />
      </figure>
    </section>

    <section className="Copyright">
      <div className="" />
      <label>&copy; 2019 Lenssen Inc.</label>
    </section>

  </footer>
);

export default SiteFooter;

// ./src/site/footer/SiteFooter.js