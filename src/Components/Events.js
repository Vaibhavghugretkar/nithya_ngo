import React from "react";

export default function Events() {
  return (
   
    <div className="events">
    <h1>Our Events</h1>

      <div className="cardContainer">
        <div className="card" >
          <img src='./nithya_events.jpg' class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
       
        <div className="card" >
          <img src="../nithya_events.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" >
          <img src="./nithya_events.jpg" class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

      </div>
  </div>
  
  );
}
