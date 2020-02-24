import React from 'react';
import "./form.css";
 const Form = props =>{
     return(
         <div className = "container">
             <form onSubmit={props.loadWeatherComponent}>
             <div className="row ">
                <div className="col-md-3 offset-md-2 py-2">
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"></input>
                </div>
                <div className="col-md-3 py-2">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"></input>
                </div>
                <div className="col-md-3 py-2">
                    <button  className="btn btn-warning">Get Weather</button>
                </div>
                </div>
                </form>
         </div>
         
     )
 }

 export default Form