import "./NavigationBar.css"
import { useNavigate,Link } from "react-router-dom";

const NavigationBar = () => {
    return(// how to navigate in main page with a tag but correct is <Link to=""></Link>
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