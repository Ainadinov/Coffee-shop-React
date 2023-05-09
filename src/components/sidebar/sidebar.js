import { Link } from "react-router-dom";

function SideBar(){
    return(
        <div className="sidebar">
            <Link className="sidebar__link" to="/">Coffee House</Link>
            <Link className="sidebar__link" to="/our-house">Our Coffee</Link>
            <Link className="sidebar__link" to="/pleasure">For your pleasure</Link>
        </div>
    )
}

export default SideBar;