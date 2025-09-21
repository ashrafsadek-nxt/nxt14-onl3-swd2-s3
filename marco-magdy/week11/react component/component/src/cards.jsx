import "./cards.css";
import cardImage from "./assets/image.png";

let cards = (
  <div className="col-sm-12 col-md-6 col-lg-3">
    <div className="card">
      <img src={cardImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
);

function Cards() {
  return (
    <>
      <div className="container-fluid p-5 my-5 bg-primary d-flex justify-content-evenly">
        <div className="row">
          {cards}
          {cards}
          {cards}
          {cards}
        </div>
      </div>
    </>
  );
}

export default Cards;
