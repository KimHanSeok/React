import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
    <>
        <header>
            <section className = "header" id = "header">
                <nav>
                    <a href = "./main.html"></a>
                </nav>
                <div className = "text-box">
                    <h1>CONTACT US</h1>
                    <h2>
                        김한석 01012345678<br/>
                        hanzang0706@naver.com<br/>
                        <br/>
                        류관현 01098765432<br/>
                        sosto258@kakao.com
                    </h2>
                </div>
            </section>
        </header>
    </>
    );
};
export default ContactUs;