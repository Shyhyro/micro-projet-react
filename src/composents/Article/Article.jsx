import "./Article.css";
import {Plan} from "../Plan/Plan";

export const Article = () => {
    return (
        <div className="article">
            <h2>PRICING AND  PLANS</h2>
            <p className="article-description">Risk free, 30 days trial period, 30-day money back guarantee, no hidden fees</p>
            <div className="article-list">
                <Plan />
                <Plan />
            </div>
            <p className="article-message">
                <a href="#">Contact us</a> if your online store operating more than 100 orders per month
            </p>
            <h3 className="article-banner">30-DAY FREE TRIAL</h3>
            <p className="article-description-2">
                Try the product absolutely free for the first month. No risk. No hidden fees. After that
                you will get a payment link inside product chat in application.
            </p>
            <button className="sign-in">SIGN IN</button>
        </div>
    )
}