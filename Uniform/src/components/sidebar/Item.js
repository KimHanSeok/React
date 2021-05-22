import React, { useState } from "react";
import "./Item.css";

const Item = () => {
    return (
    <>
            <div className = "Pmain" >
                <div className = "text-box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        REP1ER's PREMIER LEAGUE<br/>
                    </p>
                </div>
            </div>

        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = {require("../sidebar/images/aws.png").default}/> 
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>

            <div className = "item-col">
                <p>
                    <img src = {require("../sidebar/images/aws.png").default}/>
                </p>
                <h3>1</h3>
                <h5>1</h5>
            </div>
            
            <div className = "item-col">
                <p>
                    <img src = "PrimierLeague.jpg"/>
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