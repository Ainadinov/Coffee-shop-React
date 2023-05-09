import './index.css';
import { Link } from 'react-router-dom';
import CoffeeImg from '../images/goods-coffee.png'


function Coffee ({searchValue, collections, isLoading}){
    return(
        <div className='coffee'>
            <div className="coffee__item">
                {isLoading ? (
                    <h2>Loading...</h2>
                ):(
                    searchValue ? collections.filter((e) => e.country.toLowerCase().includes(searchValue.toLowerCase())).map((e,i)=>  
                <Link  to={"/our-house/" + i} >
                    <div className="coffee__column" key={i}>
                        <img src={CoffeeImg} alt="#"></img>
                        <div className="coffee__name">{e.name}</div>
                        <div className="coffee__country">{e.country}</div>
                        <div className="coffee__price">{e.price}</div>
                    </div>  
                </Link>):collections.map((e,i)=>  
                <Link  to={"/our-house/" + i} >
                    <div className="coffee__column" key={i}>
                        <img src={CoffeeImg} alt="#"></img>
                        <div className="coffee__name">{e.name}</div>
                        <div className="coffee__country">{e.country}</div>
                        <div className="coffee__price">{e.price}</div>
                    </div>  
                </Link>)
                )}
            </div>
        </div>
    )
}

export default Coffee;