import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";
import './Footer.css'
import Ad from './Ad'

function Footer()
{
    return (
        <div className="footer">
            <div>
                <LeftFooter></LeftFooter>
            </div>
            <div>
                <Ad></Ad>
            </div>
            <div>
                <RightFooter />
            </div>
        </div>
    )
}

export default Footer;