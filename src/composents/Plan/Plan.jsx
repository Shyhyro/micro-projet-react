import "./Plan.css";

export const Plan = () => {
    return (
        <div className="plan">
            <div className="plan-title">STARTER</div>
            <div className="plan-price">
                <p>$<span className="plan-price-price">9</span>99</p>
                <p>(monthly)</p>
            </div>
            <div className="plan-list">
                <ul>
                    <li>Up to <span className="red">30</span> orders per month</li>
                    <li>Orders notifications</li>
                    <li>Statistics data</li>
                    <li>Daily reports</li>
                </ul>
            </div>
        </div>
    )
}