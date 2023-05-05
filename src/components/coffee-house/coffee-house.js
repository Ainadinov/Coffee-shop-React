import './index.css';
import SideBar from "../sidebar/sidebar";
import logo from "../images/Beans-logo.png"
import logoBlack from "../images/Beans-logo-black.png"
import BestCoffee1 from "../images/best-coffee-1.png"
import BestCoffee2 from "../images/best-coffee-2.png"
import BestCoffee3 from "../images/best-coffee-3.png"
import Footer from "../footer/footer";

const BestCoffee = [
    {
        img:BestCoffee1,
        name: "Solimo Coffee Beans 2 kg",
        price: "10.73$",
    },
    {
        img:BestCoffee2,
        name: "Presto Coffee Beans 1 kg",
        price: "15.99$",
    },
    {
        img:BestCoffee3,
        name: "AROMISTICO Coffee 1 kg",
        price: "6.99$",
    },
]

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

            <div className="best">
                <h2 className="best__title">Our Best</h2>
                <div className="best__item">
                    {BestCoffee.map((e,i)=>                 
                    <div className="best__column" key={i}>
                        <img src={e.img} alt="#"></img>
                        <div className="best__name">{e.name}</div>
                        <div className="best__price">{e.price}</div>
                    </div>)}
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default CoffeeHouse;