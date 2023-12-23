import React  from "react";
import "../stylesheet/Home.css"
import {Link} from "react-router-dom";
function Home(){
    return(
       <div className="home_page">
           <div className="title">
               <h1 id="title-front-page">Grape Escape</h1>
               <h2 id="subtitle-front-page">Exploring Macedonia's Wineries</h2>

               <Link to="/map">
                   <button className="button">MAPS</button>
               </Link>
           </div>
       </div>
    );
}
export default Home;