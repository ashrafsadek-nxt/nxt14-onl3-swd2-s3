

import { useNavigate } from "react-router-dom";
const Card = ({product}) => {
    const navigate=useNavigate();
  return (
    <>
      <div className="card h-100" style={{width: '18rem'}}>
        <img src={product.image} className="card-img-top" alt="" style={{height:"200px ",objectFit:"contain"}} />
        <div className="card-body">
            <h3>{product.title}</h3>
          <p className="card-text">
                   {product.description}
          </p>
        </div>
        <button className="btn btn-danger mt-auto" onClick={()=>navigate(`/products/${product.id}`)}>See Detials</button>
      </div>
    </>
  );
};

export default Card;
