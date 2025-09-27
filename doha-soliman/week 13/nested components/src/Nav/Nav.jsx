import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div>
        <LeftNav />
      </div>
      <div>
        <RightNav />
      </div>
    </div>
  );
}

export default Nav;
