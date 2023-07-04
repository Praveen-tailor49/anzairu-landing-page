import React from "react";
import './section.css'
import coinImage from '../../images/Rectangle 8.png'
import sunnyImage from '../../images/sunny 1.png'
import giftImage from '../../images/gift 1.png'
import cardImage from '../../images/card 1.png'
import bitcoinImage from '../../images/Wavy_Tech-24_Single-07 1.png'

export const Section = () => {
    return (
        <section>
            <div className="win-a-collectible-coin">
                <div></div>
                <div className="win-a-collectible-coin--div">
                    <div className="win-a-collectible-coin img-div">
                        <div className="black-img"></div>
                        <img className="coin-img" src={coinImage}/>
                    </div>
                    <div className="win-a-collectible-coin txt-div">
                        <h2>Win a collectible Coin</h2>
                        <p>
                            Join our exclusive pre-launch survey, answer a few questions on
                            video, and win an ANZAIRU collectible coin after the project is
                            live!
                        </p>
                    </div>
                </div>
            </div>

            <div className="how-it-works">
                <h2>How It Works?</h2>
                <div className="how-it-works--cards">
                    <div className="how-it-works--card">
                        <img src={sunnyImage}/>
                        <div>
                            <h3>Forecast</h3>
                            <p>
                                Use any and all tools available to place the most accurate bet. AI models, weather
                                stations, statistical analysis—everything is fair in the battle for the most accurate
                                forecast!
                            </p>
                        </div>
                    </div>
                    <div className="how-it-works--card">
                        <img src={cardImage}/>
                        <div>
                            <h3>Mint</h3>
                            <p>
                                Mint your forecast bet as an NFT scorecard. It will be fully transparent and immutable
                                on the blockchain.
                            </p>
                        </div>
                    </div>
                    <div className="how-it-works--card">
                        <img src={giftImage}/>
                        <div>
                            <h3>Redeem</h3>
                            <p>
                                The weather oracle automatically grades every scorecard. The top 3 most accurate bets
                                can be redeemed for stablecoin against the smart contract!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-vision">
                <div className="our-vision--divs">
                    <div className="our-vision--div">
                        <h2>Our Vision</h2>
                        <p>
                            The goal of Anzairu is to empower weather science and forecasting, especially in underserved
                            regions. By incentivizing the forecasts with monetary prizes paid in stablecoin to the three
                            most accurate forecasts minted on the blockchain, we hope to bring together public attention,
                            resources, talents and technology to reinvent the way of how we interact with weather data.
                        </p>
                    </div>
                    <div className="our-vision--div">
                        <img src={bitcoinImage}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
