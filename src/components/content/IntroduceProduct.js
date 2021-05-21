import React from "react";

import { Button } from "reactstrap";

import imgIntroduce from "../img/feature-image.jpg";

const IntroduceProduct = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-6">
        <div className="wrapper-introduce">
          <div className="wrapper-introduce-title">
            Looking for the best products?
          </div>
          <p className="wrapper-introduce-paragraph">
            This template is free to use for your business websites. However,
            you have no permission to redistribute the downloadable ZIP file on
            any template collection website. Contact us for more info.
          </p>
          <ul className="wrapper-introduce-ul">
            <li className="wrapper-introduce-ul-li">
              Lorem ipsum dolor sit amet
            </li>
            <li className="wrapper-introduce-ul-li">
              Consectetur an adipisicing elit
            </li>
            <li className="wrapper-introduce-ul-li">
              It aquecorporis nulla aspernatur
            </li>
            <li className="wrapper-introduce-ul-li">
              Corporis, omnis doloremque
            </li>
            <li className="wrapper-introduce-ul-li">
              Non cum id reprehenderit
            </li>
          </ul>
          <Button color="danger" className="btn-read">
            Read More
          </Button>{" "}
        </div>
      </div>

      <div className="col-xl-6 col-lg-6">
        <div className="wrapper-introduce-img">
          <img src={imgIntroduce} alt="" />
        </div>
      </div>
    </>
  );
};

export default IntroduceProduct;
