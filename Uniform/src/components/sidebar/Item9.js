import React, { useState } from "react";
import "./Item9.css";

const Item = () => {
    return (
    <>
            <div className = "A3main" >
                <div className = "text-box">
                    <h1>AFRICA</h1>
                    <p>
                        REP1ER's AFRICA<br/>
                    </p>
                </div>
            </div>

        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = {process.env.PUBLIC_URL + '../sidebar/sidebarimages/img-7.jpg'} />
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = "/img-4.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = "#"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>
        </div>

        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = "../images/mentoring.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = "../images/club.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = "../images/parttimejob.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>
        </div>

        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = "../images/mentoring.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>
            
            <div className = "item-col">
                <p>
                    <img src = "../images/club.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = "../images/parttimejob.jpg"/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>
        </div>
    </>
    );
};
export default Item;