import React from 'react';
import "./Legend.css";

const Legend = () => {
  return (
  <>
      <header>
          <div className = "legend" >
              <div className = "text-box">
                  <h1>LEGEND</h1>
                  <p>
                      REP1ER's LEGEND<br/>
                  </p>
              </div>
          </div>
      </header>

      <div className = "row">
          <div className = "item-col">
             
              <p>
                  <img src = "# " />
              </p>
              
              <br/><h3>1</h3>
              <br/><h5>1</h5>
             
          </div>
          <div className = "item-col">
              <p>
                  <img src = "/img-4.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
          <div className = "item-col">
              <p>
                  <img src = "PrimierLeague.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
      </div>
      <div className = "row">
          <div className = "item-col">
              <p>
                  <img src = "../images/mentoring.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
          <div className = "item-col">
              <p>
                  <img src = "../images/club.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
          <div className = "item-col">
              <p>
                  <img src = "../images/parttimejob.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
      </div>
      <div className = "row">
          <div className = "item-col">
              <p>
                  <img src = "../images/mentoring.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
          <div className = "item-col">
              <p>
                  <img src = "../images/club.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
          <div className = "item-col">
              <p>
                  <img src = "../images/parttimejob.jpg"/>
              </p>
              <br/><h3>1</h3>
              <br/><h5>1</h5>
          </div>
      </div>

      {/* <footer>
          <div className = "contact">
              <h1>CONTACT US</h1>
              <div className = "row">
                  <div className = "contact-col">
                      <a href = "#"><img src = "#"/></a>
                  </div>
              </div>
          </div>
      </footer> */}
  </>
  );
};
export default Legend;
