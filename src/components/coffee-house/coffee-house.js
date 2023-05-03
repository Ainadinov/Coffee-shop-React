import logo from "../images/Beans-logo.png"
import logoBlack from "../images/Beans-logo-black.png"
import SideBar from "../sidebar/sidebar";


function CoffeeHouse(){
    return(
        <div className="coffee__house">
            <div className="header">
                <SideBar/>
                <h1 className="header__title">Everything You Love About Coffee</h1>
                <img src={logo}></img>
                <h2 className="header__subtitle">We makes every day full of energy and taste</h2>
                <h2 className="header__subtitle">Want to try our beans?</h2>
                <button className="header__btn">More</button>
            </div>

            <div className="about">
                <h2 className="about__title">About Us</h2>
                <img src={logoBlack}></img>
                <p> Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br></br>
                    <br></br>
                    <br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </div>
        </div>
    )
}

export default CoffeeHouse;