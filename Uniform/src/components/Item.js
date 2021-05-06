import React, { useState } from "react";
import "./Item.css";

const Item = () => {
    return (
    <>
        <header>
            <section className = "header" id = "header">
                <nav>
                    <a href = "#"></a>
                </nav>
                <div className = "text-box">
                    <h1>PREMIER LEAGUE</h1>
                    <p>
                        HJK's PREMIER LEAGUE<br/>
                    </p>
                </div>
            </section>
        </header>

        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = "#"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "#"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "#"/>
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

        <footer>
            <div className = "contact">
                <h1>CONTACT US</h1>
                <div className = "row">
                    <div className = "contact-col">
                        <a href = "#"><img src = "#"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};
export default Item;