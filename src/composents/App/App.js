import './App.css';
import {Header} from "../Header/Header";
import {Banner} from "../Banner/Banner";
import {Article} from "../Article/Article";
import {Footer} from "../Footer/Footer";

function App() {
    return (
        <div>
            <div className="first-block">
                <Header />
                <Banner />
            </div>
            <Article />
            <Footer />
        </div>
    );
}

export default App;