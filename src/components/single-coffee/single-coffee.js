import './index.css';
import Coffee from '../chose-coffee/choose';
import Footer from '../footer/footer';
import singleCoffee from "../images/single-coffee.jpg";
import logoBlack from "../images/Beans-logo-black.png";

function SingleCoffee(){
    return(
    <div className="our__coffee">
        <h1 className='our__coffee-title'>
            Our Coffee
        </h1>

        <div className='single__coffee'>
            <img src={singleCoffee} className='single__img'></img>
            <div className='single__about'>
                <h3 className='single__title'>About it</h3>
                <img src={logoBlack}></img>
                <div className='single__country'><strong>Country: </strong>Brazil</div>
                <div className='single__text'><strong>Description: </strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <div className='single__price'><strong>Price: </strong>      16.99$</div>
            </div>
        </div>
        
        <Footer/>
    </div>
    )
}

export default SingleCoffee;