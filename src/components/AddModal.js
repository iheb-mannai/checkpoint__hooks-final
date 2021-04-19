
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import React, {useState} from 'react';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

 
function AddModal({isOpen, closeModal, addMovie}){


const [name, setName] = useState('')
const [story, setStory] = useState('')
const [rating, setRating] = useState(null)
const [year, setYear] = useState(null)
const [image, setImage] = useState('')








 
    return (
      <div>
     
        <Modal
          isOpen={isOpen}
        
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          
          <button onClick={closeModal} className='btn btn-danger' style={{width: '90%', marginLeft:'5%'}}>close</button>
          
          
          <form style={{marginTop:'20px'}} onSubmit={
            (e)=> {
            e.preventDefault()
            addMovie({name, story, rating, year, image})

            }
          }>
  <div className="form-group">
    <label for="exampleInputEmail1">film Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp" placeholder="Movie title"/>
    
  </div>


  <div className="form-group">
    <label for="exampleInputPassword1">Story</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Story" onChange={(e)=>setStory(e.target.value)}/>
  </div>


  <div className="form-group">
    <label for="exampleInputPassword1">Image URL</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
  </div>


  <div className="form-group">
    <label for="exampleInputPassword1">Rating</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="year" max='5' min='1' onChange={(e)=>setRating(e.target.value)}/>
  </div>

 <div className="form-group">
    <label for="exampleInputPassword1">Year</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="year" onChange={(e)=>setYear(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" style={{marginLeft: '25%', width: '50%', marginTop: '20px'}}>Submit</button>
</form>
  




         
        </Modal>
      </div>
    );
}
 
export default AddModal