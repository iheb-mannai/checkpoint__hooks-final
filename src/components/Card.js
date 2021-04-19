import React from 'react';
const Card = ({movie}) => {
    return (
        <div>
            <div className="card" style={{width: '18rem' , height: '40em'}}>
  <img src={movie.image} className="card-img-top" alt="movieImage"/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign: 'center'}}>{movie.name} ({movie.year})</h5>
    <p className="card-text" style={{textAlign: 'center'}}>{movie.story}</p>

<div style={{width:'50%', marginLeft: '30%'}}>
{
[1,2,3,4,5].map(el => (
    el <=movie.rating ?
    <i key={el} style={{color:'yellow'}} className="fas fa-star"></i> : <i key={el}  className="fas fa-star"></i> )
)
}
</div>
<br/>
    <a href="#" className="btn btn-primary" style={{marginLeft: '25%', width: '50%'}}>Watch Film</a>
  </div>
</div>
        </div>
    )
}

export default Card
