import React from 'react'
import Img1 from '../assets/p1.jpg'
import Img2 from '../assets/p2.jpg'
import Img3 from '../assets/p3.jpg'

import Img4 from '../assets/p4.jpg'



const Main = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-5" >
  <div className="col">
    <div className="card h-30 w-30">
      <img src={Img1} className="card-img-top " alt="..." style={{ height: "300px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam atque dolorum adipisci, ipsum omnis dolorem maxime, voluptatum accusamus eum soluta enim! Asperiores, enim dolor laudantium placeat exercitationem natus tempore tempora.</p>
        <button type="button" class="btn btn-danger">Shop now</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-30">
      <img src={Img2} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore reprehenderit aspernatur error similique veritatis temporibus illo saepe esse rem placeat eveniet beatae nobis, quos commodi deserunt dolorem repudiandae fuga repellat?</p>
                <button type="button" class="btn btn-danger">Shop now</button>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Img3} className="card-img-top" alt="..." style={{ height: "300px", objectFit: "cover" }}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam consequatur maxime cupiditate dolorum dolores ipsum blanditiis, nobis asperiores aliquam doloremque explicabo molestiae nesciunt ab nam quidem culpa fugit eos. Quasi?</p>
                <button type="button" class="btn btn-danger">Shop now</button>

      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Main
