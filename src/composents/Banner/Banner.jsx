import "./Banner.css";
import image from "../../assets/Schedule.png";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h2>BEST PLANNING APP FOR BUSINESS</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda deleniti deserunt distinctio doloremque doloribus, eos fugiat mollitia quae quis similique.
                    Accusamus animi beatae eum eveniet illo in incidunt neque nulla.
                </p>
                <button>LEARN MORE</button>
            </div>
            <img src={image} alt="illustration" />
        </div>
    )
}