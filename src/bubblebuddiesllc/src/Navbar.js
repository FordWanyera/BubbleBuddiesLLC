const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Jane Hopkins</h1>
            <div className="links">
               <a href="/">Home</a>
               <a href="/create">Patient Records</a>
               <a id="credentials" href="/">login/register</a>  
            </div>
            {/*<div className="patientrecords">
                <a href="/create">Patient Records</a>
            </div>
            <div className="credentials">
                <a href="/">login/register</a>
    </div>*/}
        </nav>
     );
}
 
export default Navbar;