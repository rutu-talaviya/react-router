import React from 'react'
import {Link} from 'react-router-dom'

const Contect=()=> {
  return (
    <>
    
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="enter yourname"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Number</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter number"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Adress</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <button type="button" class="btn btn-success">Submit</button>
<br/>
<br/>
    <Link to='/Home'><button type="button" class="btn btn-success">GoBack</button></Link>
     
    </>
  );
};

export default Contect;
