import React from 'react';
// import { useNavigate} from 'react-router-dom';
// import Home from '../Home/Home';


// import { 
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from 'react-router-dom';

// import NavbarComp from '.../Layout/NavbarComp';


const MainHome = () => {
  return (
    
    <div>
      <h1> Login to the portal</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="email" className="form-control"/>
          <br />
          <input type="text" placeholder="password" className="form-control"/>
          <br />
          <button className="btn btn-primary"  href="/NavbarComp" > Login</button>
      
    
   </div>
    </div>
    

   
  )
}
export default MainHome;




  








