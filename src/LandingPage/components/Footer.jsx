import React from "react";
import "./footer.css"
import "../styles-new.css"

export const Footer = () => {
    return (
        <footer className="footer_con">
            <div className="left_con">
                <div className="">
                    <h1>Are You With Us?</h1>
                    <p>Join our pre-launch survey to win a collectible metal coin!</p>
                    <button className="custom_btn">Survey</button>
                </div>
            </div>


            <div className="right_con">
                <h3>Get In Touch</h3>
                <div className="form_con">
                    <form>
                        <div className="input_con">
                            <div className="input_wrp">
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="input_wrp">
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="input_wrp">
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>
                        <textarea id="w3review" name="w3review" rows="4" cols="50" />
                        <button className="custom_btn">Survey</button>
                    </form>
                </div>
            </div>

        </footer>
    )
}
