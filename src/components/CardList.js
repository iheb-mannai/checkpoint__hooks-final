import React, {useState} from 'react';
import Card from './Card';
import data from '../moviesData' ;
import AddModal from './AddModal';

const CardList = () => {

const closeModal = () => setIsOpen(false) ;
const [isOpen, setIsOpen] = useState(false) ;
const [movies, setMovies] = useState(data);
const addMovie = (newMovie) => {
setMovies([...movies, newMovie])
}



const [inputFilter, setInputFilter] = useState('')
const [ratingFilter, setRatingFilter] = useState(null)




const filterFilm = movies.filter((el)=> ratingFilter !=null ? el.name.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()) && el.rating == ratingFilter :el.name.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase()) ) 
    return (
        <div>
            
            <nav class="navbar navbar-dark bg-dark justify-content-between">
  
  <form style={{display:'flex', justifyContent:'flex-start'}}>
    <input class="form-control mr-sm-2" type="search"  onChange={(e)=>setInputFilter(e.target.value)} placeholder="Search" aria-label="Search" style={{marginLeft:'10%', width: '250px'}}/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{marginLeft:'10%'}}>Search</button>
  </form>

  <div style={{width: '300px', display: 'flex', justifyContent: 'flex-end', marginRight: '30px'}}>{
[1,2,3,4,5].map(el => ( <i key={el}  className="fas fa-star" style={{color:'white'}} style={{color: el<= ratingFilter ? 'yellow': 'white'}} onClick={()=> setRatingFilter(el)}></i> )
)
}</div>
</nav>


            <button className="btn btn-primary" style={{width: '10%', marginLeft: '45%', marginBottom: '30px' , marginTop:'30px'}} onClick={()=>setIsOpen(true)}>Add movie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal}  addMovie={addMovie}/>

        <div style={{display:'flex' ,justifyContent:'space-between', flexWrap:'wrap' , margin :'10px 10%'}}>
            {   
            filterFilm.map ((el, i)=>(
            <Card key={i} movie={el} />
            ))
            }
        </div>
        </div>
    )
}

export default CardList
