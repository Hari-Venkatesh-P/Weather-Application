 import React from "react";


 const Weather = (props) => {
     return(
         <div className="container text-light">
             <div className="cards pt-4">
     <h1>{props.city}</h1>
                 <h5 className ="py-4">
                    <i className={getClass(props.icon)} />
                 </h5>
                    {props.degree ? (<h1 className="py-2">{props.degree}&deg;</h1>):null}
                 { props.mintemp&&props.maxtemp ? minmaxTemp(props.mintemp,props.maxtemp): null}
                 <div>
                     <h4 className="py-3">{props.description}</h4>
                 </div>
             </div>
         </div>
     );
 }; 

 function getClass(icon)
 {
    return "display-1 wi "+icon;
 }
 function minmaxTemp(min,max)
 {
     return (
         <h3>
             <span className="px-4">{min}&deg; {max} &deg;</span>
         </h3>
     );
 }
 export default Weather;  