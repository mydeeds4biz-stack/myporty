import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there I am <span className="purple">Moses Andikan Best</span>{" "}
            from <span className="purple">Lagos, Nigeria</span>.
            <br />
            I am currently working as an{" "}
            <span className="purple">Artificial Intelligence Engineer</span> at{" "}
            <span className="purple">Bamservices</span>.
            <br />I hold a Bachelor of Science (Bsc.Ed) in{" "}
            <span className="purple">Computer Education</span> from{" "}
            <span className="purple">University of Nigeria, Nsukka</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Moses Andikan Best</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
