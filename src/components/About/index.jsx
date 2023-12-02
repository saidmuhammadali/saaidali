import React from "react";
import {
  Conatiner,
  Container2,
  Container3,
  Div,
  Img,
  Img2,
  Img3,
  Img4,
  Img5,
} from "./style";
import one from "../../img/about1.png";
import two from "../../img/about2.png";
import three from "../../img/about3.png";
import four from "../../img/about4.png";
import five from "../../img/about5.png";
import logo from "../../img/logo.png";
import "./style.css";

function About() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "62px",
          fontFamily: "Anton",
        }}
      >
        Mission of our website
      </h1>
      <p
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        The mission of our site is to significantly <br /> reduce the amount of
        garbage on the street <br /> and preserve nature. Who will help us? Of
        course <br /> YOU. The essence of our website is to motivate young{" "}
        <br /> and adult people to save nature, while rewarding them.
      </p>
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: "12px",
          color: "white",
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        What you do for us is this:
      </p>
      <Conatiner>
        <Div>
          <Img src={one} alt="" />
        </Div>
        <Div>
          <Img2 src={two} alt="" />
        </Div>
      </Conatiner>
      <Container2>
        <Div>
          <Img3 src={three} alt="" />
        </Div>
        <Div>
          <Img4 src={four} alt="" />
        </Div>
      </Container2>
      <Container3>
        <Div>
          <Img5 src={five} alt="" />
        </Div>
      </Container3>
      <p
        style={{
          color: "white",
          fontFamily: "sans-serif",
          marginTop: "-990px",
          marginLeft: "430px",
          fontSize: "13px",
        }}
      >
        Your first task is to collect <br /> the garbage and sort it into
        categories <br />
        such as PLASTIC, PAPER, VEGETABLE <br /> WASTE, GLASS and other waste
        that can be recycled. <br /> You can collect at home, <br /> on the
        street and wherever you want.
      </p>
      <p
        style={{
          color: "white",
          marginLeft: "210px",
          marginTop: "90px",
          fontFamily: "sans-serif",
          fontSize: "13px",
        }}
      >
        What's next? You have to deliver <br /> the collected waste to
        collection <br /> points, where you can leave <br /> the waste to the
        employees.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "13px",
          fontFamily: "sans-serif",
          marginTop: "130px",
          marginLeft: "443px",
        }}
      >
        For the waste you provide, our <br /> employees will provide you with
        <br /> a certain amount of electronic coins, <br /> depending on the
        volume of your waste provided.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "13px",
          fontFamily: "sans-serif",
          marginLeft: "210px",
          marginTop: "102px",
        }}
      >
        By collecting these coins, <br /> you will have the opportunity <br />{" "}
        to exchange them in our online <br /> marketplace for things of your
        choice.
      </p>
      <p
        style={{
          color: "white",
          fontSize: "13px",
          fontFamily: "sans-serif",
          marginTop: "120px",
          marginLeft: "443px",
        }}
      >
        In our marketplace there will <br /> be products of different categories{" "}
        <br />
        that you can exchange for your electronic <br /> coins. Our partners who
        will provide goods will <br /> be large companies, restaurants, cafes
        and many more.
      </p>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-12 ft-2"
              style={{ marginTop: "-80px" }}
            >
              <h5 style={{ fontSize: "15px" }}>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/home" style={{ fontSize: "11px" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/Donation" style={{ fontSize: "11px" }}>
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/marketplace"
                    style={{ fontSize: "11px" }}
                  >
                    {" "}
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/location" style={{ fontSize: "11px" }}>
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt=""
              style={{
                width: "50px",
                height: "30px",
                marginTop: "-342px",
                marginLeft: "30px",
              }}
            />
            <p className="pp">
              Lorem ipsum dolor sit <br /> amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="divbuton">
            <input className="input" type="Email" placeholder="  Email" />
            <button className="buttom">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p style={{ fontSize: "10px" }}>Design By Green Clean City</p>
      </div>
    </>
  );
}

export default About;
