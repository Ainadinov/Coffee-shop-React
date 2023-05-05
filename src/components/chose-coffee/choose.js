import './index.css';
import CoffeeImg from '../images/goods-coffee.png'

const СhooseCoffee = [
    {
        img:CoffeeImg,
        name: "Solimo Coffee Beans 2 kg",
        country: "Columbia",
        price: "10.73$",
    },
    {
        img:CoffeeImg,
        name: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "10.73$",
    },
    {
        img:CoffeeImg,
        name: "AROMISTICO Coffee 1 kg",
        country: "Kenya",
        price: "10.73$",
    },
    {
        img:CoffeeImg,
        name: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "10.73$",
    },
    {
        img:CoffeeImg,
        name: "AROMISTICO Coffee 1 kg",
        country: "Columbia",
        price: "10.73$",
    },
    {
        img:CoffeeImg,
        name: "AROMISTICO Coffee 1 kg",
        country: "Brazil",
        price: "10.73$",
    },
]

function Coffee (){
    return(
        <div className='coffee'>
            <div className="coffee__item">
                {СhooseCoffee.map((e,i)=>                 
                <div className="coffee__column" key={i}>
                    <img src={e.img} alt="#"></img>
                    <div className="coffee__name">{e.name}</div>
                    <div className="coffee__country">{e.country}</div>
                    <div className="coffee__price">{e.price}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Coffee;