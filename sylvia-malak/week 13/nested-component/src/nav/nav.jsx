import './nav.css'
function NavBar(){

    return (
        <div className="nav-bar">
            <div className="left-side">
                <h1 className="logo">NC</h1>
                <input type="text" placeholder=" search..." />
            </div>
            <div className="links">
                <a href="#">contact us</a>
                <a href="#">our services</a>
                <a href="#">reviews</a>
            </div>
        </div>
    );

}
export default NavBar;