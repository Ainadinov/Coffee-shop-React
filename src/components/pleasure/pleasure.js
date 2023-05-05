import './index.css';
import logoBlack from "../images/Beans-logo-black.png"
import pleasureGoods from "../images/pleasure-goods.png"
import Footer from '../footer/footer';
import Coffee from '../chose-coffee/choose';

function Pleasure(){
    return(
        <div className="pleasure">
            <h1 className='pleasure__title'>
                For your pleasure
            </h1>
            <div className='pleasure__goods'>
                <img src={pleasureGoods} className='goods__img'></img>
                <div className='goods__about'>
                    <h3 className='goods__title'>About our goods</h3>
                    <img src={logoBlack}></img>
                    <p className='goods__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                    <br></br><br></br>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an.<br></br><br></br>Last ask him cold feel met spot shy want.Children me laughing we prospect answered followed. At it went is song that held help face.</p>
                </div>
            </div>

            <Coffee/>
            <Footer/>
        </div>
    )
}

export default Pleasure;