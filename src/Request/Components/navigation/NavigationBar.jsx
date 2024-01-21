import "./NavigationBar.css"
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
    return(
        <nav>
            <a href="/">Hello new task</a>
            <div>
                <p> welcome,<span>Guest</span></p>
                <i className="fa fa-user"></i>
            </div>
        </nav>
    )
}
export default NavigationBar