import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../images/image-2.png"
import HeaderReightImg from "../../images/digital_money copy 1.png"

export const Header = () => {
    return (
        <header className="hero">
            <div className="container">
                {/*  Other icons with absolute positioning */}
                <div className="flex justify-between item-center">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="nav flex justify-between">
                        <div className="btn active">
                            <h6>How It Works</h6>
                        </div>

                        <div className="btn">
                            <h6>Contact</h6>
                        </div>

                        <div className="btn active">
                            <h6>Survey</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                {/*  Other icons with absolute positioning */}
                <div className="flex justify-between item-center">
                    <div>
                        <h3>Bet on the Weather.</h3 >
                        <h3 >Earn Crypto.</h3    >
                        <h3 >Empower Science.</h3    >
                    </div>
                    <div className="flex justify-between">
                    <div>
                        <img src={HeaderReightImg} alt="logo" />
                    </div>
                    </div>
                </div>
            </div>












            {/* <div className="navigation">
                 Logo and navigation items
            </div>
            <div className="headline">
                Bet on the weather
            </div> */}
        </header>
    )
}
