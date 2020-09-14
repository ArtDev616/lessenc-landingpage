import React, { Fragment } from "react";
import Page from "../Page.js";
import HomePageFigure from "./HomePageFigure.js";
import HomePageGalleryFigure from "./HomePageGalleryFigure.js";

import blueprint3DRender from "./3dRendering.png";
import compass from "./compass.svg";
import contract from "./contract.svg";
import photo1 from "./photo-1.jpg";
import detail1 from "./detail1.png";
import detail2 from "./detail2.png";
import detail3 from "./detail3.png";
import kitchenInterior1 from "./kitchen-interior1.jpg";
import kitchenOverlay from "./kitchen.svg";
import kitchenOverlayMobile from "./kitchen-over-mobile.svg";

import "./HomePage.css";

const HomePage = () => (
  <Page className="HomePage">
    <article>
      <HomePageGalleryFigure />
      <HomePageFigure
        className="HomePageConceptSection"
        caption={
          <Fragment>
            <div>
              <img src={compass} alt="" />
            </div>
            <div>
              <h1>From concept to completion</h1>
              <p>
                Right from planning your home, laying the foundation to
                completing the entire project, our team works dilligently with
                you to make your dream a reality.
              </p>
            </div>
            <div>
              <img src={contract} alt="" />
            </div>
          </Fragment>
        }
      >
        <img className="render" src={blueprint3DRender} alt="" />
      </HomePageFigure>

      <HomePageFigure
        className="HomePageLivingSpacesSection"
        caption={
          <Fragment>
            <h1>Creating wonderful living spaces</h1>
            <p>
              At Lenssen Inc., our mantra is “Enhance the Building Experience”. 
              We aim to provide our clients with not only an excellent final
              product, but also an excellent building experience.
            </p>
          </Fragment>
        }
      >
        <img src={photo1} alt="" />
      </HomePageFigure>

      <HomePageFigure
        className="HomePageLittleDetailsSection"
        caption={
          <Fragment>
            <h1>Little details that make a big difference</h1>
            <p>
              We pay attention to even the tiniest details that go a long way
              into making your home beautiful. We guarantee to build you a home
              that you will love coming back to.
            </p>
          </Fragment>
        }
      >
        <div className="PhotoPanel">
          <img
            src={detail1}
            alt="detail-1"
            className="Photo Photo-1"
          />
          <img
            src={detail2}
            alt="detail-2"
            className="Photo Photo-2"
          />
          <img
            src={detail3}
            alt="detail-3"
            className="Photo Photo-3"
          />
        </div>
      </HomePageFigure>

      <div className="HomePageKitchenDetailsSection">
        <img src={kitchenInterior1} alt="" className="KitchenBackground" />
        <img
          src={kitchenOverlay}
          alt=""
          className="KitchenOverlay"
        />
        <img
          src={kitchenOverlayMobile}
          alt=""
          className="KitchenOverlayMobile"
        />
      </div>
    </article>
  </Page>
);

export default HomePage;

// ./src/pages/home/HomePage.js
