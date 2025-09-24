import Leftfooter from "./leftfooter";
import Rightfooter from "./rightfooter";
import './footer.css'


function Footer(){
    return(
        <div className="footer">
            <div>
                
            </div>
            <div>
                <Leftfooter></Leftfooter>

            </div>
            <div>
                <Rightfooter></Rightfooter>

            </div>

        </div>
    );
}
export default Footer;