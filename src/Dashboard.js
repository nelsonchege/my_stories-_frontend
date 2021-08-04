import { Link } from "react-router-dom";

function Dashboard (){
    return ( 
    <div>
       <header className="trials">
           <a href="#"><p>my story</p></a>
           <input className="md-search" placeholder="Search..." />
           <Link to="/details"><p>profile</p></Link>
           <Link to="/"><p>log out</p></Link>
       </header>
    </div> );
}
 
export default Dashboard;