import Coffee from '../chose-coffee/choose';
import Footer from '../footer/footer';
import './index.css';
import ourCoffeeBeans from "../images/our-coffee-img.jpg";
import logoBlack from "../images/Beans-logo-black.png";
import { useEffect, useState } from 'react';

const  filt = [
    { "name": "All" },
    { "name": "Brazil" },
    { "name": "Kenya" },
    { "name": "Columbia" }
  ];

function OurCoffee(){
    const [collections, setCollections] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('')
    
    useEffect(()=>{
        setIsLoading(true);
    
        const category = categoryId ? `category=${categoryId}`: '';
    
        fetch(`https://645540a8a74f994b33564a43.mockapi.io/coffee?page=${page}&limit=6&${category}`)
        .then((res) => res.json())
        .then((json) => {
          setCollections(json);
        })
        .catch((err) => {
          console.warn(err);
          alert('Error')
        })
        .finally(()=> setIsLoading(false))
      }, [categoryId, page]);

    return(
        <div className="our__coffee">
        <h1 className='our__coffee-title'>
            Our Coffee
        </h1>
        <div className='our__coffee-beans'>
            <img src={ourCoffeeBeans} className='beans__img'></img>
            <div className='beans__about'>
                <h3 className='beans__title'>About our beans</h3>
                <img src={logoBlack}></img>
                <p className='beans__text'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                <br></br><br></br>Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an.<br></br><br></br>Last ask him cold feel met spot shy want.Children me laughing we prospect answered followed. At it went is song that held help face.</p>
            </div>
        </div>

        <div className='filter'>
            <div className='filter__input'>
                <span> Looking for</span>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' placeholder='start typing here...'/>
            </div>
            <div className='filter__btn'>
                <span> Or filter</span>
                {filt.map((obj, i) => (
                    <button
                    key={obj.name} 
                    onClick={()=> setCategoryId(i)}
                    className= { categoryId == i ? "active": ''} >
                    {obj.name}
                    </button>
                ))}
            </div>
        </div>
        
        <Coffee searchValue={searchValue} collections={collections} isLoading={isLoading}/>
        <ul className="pagination">
            {
            [...Array(3)].map((_, i)=>(
                <li onClick={()=> setPage(i + 1)} className={page == i + 1 ? "active" : ''}>{i+1}</li>
            ))
            }
        </ul>
        <Footer/>
    </div>
    )
}

export default OurCoffee;