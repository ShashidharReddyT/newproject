import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashidhar Reddy </span>
            from <span className="purple"> Telangana, India.</span>
            <br /> I am a Mechanical Engineer from Methodist college of
            engineering, Abids.
            <br />
            Additionally, I am currently taking training on Full Stack
            Development in Newton School.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “There are three responses to a piece of design - yes, no, and{" "}
            <i>WOW!</i>
            <br />
            Wow is the one to aim for!”&nbsp; &nbsp; &nbsp; &nbsp;---Srt
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
