import React from "react";

import "./Banner.scss";
import BannerImg from "../../../images/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h2>Welcome to Ecommerce</h2>
                    <p>
                        FIND AMAZING PRODUCTS BELOW
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div> 
                <img className="banner-img" src={BannerImg} alt="banner-img"/>
            </div>
        </div>
    );
};

export default Banner;
