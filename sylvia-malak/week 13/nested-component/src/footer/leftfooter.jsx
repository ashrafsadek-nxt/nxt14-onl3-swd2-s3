import Ad from "./ad";

function Leftfooter(){

    return(
        <div>
           
            <ul>
                <li>
                    <a href=""> contact us

                    </a>
                </li>
                <li>
                    <a href=""> our services

                    </a>
                </li>
                <li>
                    <a href=""> reviews

                    </a>
                </li>
                
            </ul>
            <div style={{ marginLeft:"500px"}}>
                <Ad></Ad>

            </div>
            
        </div>

    );

}
export default Leftfooter;