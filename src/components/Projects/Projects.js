import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ifeedback from "../../Assets/Projects/ifeedback.gif";
import emotion from "../../Assets/Projects/emotion.png";
import wazen from "../../Assets/Projects/wazen.gif";
import ovonts from "../../Assets/Projects/ovonts.gif";
import suicide from "../../Assets/Projects/suicide.png";
import webuy from "../../Assets/Projects/webuy.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ovonts}
              isBlog={false}
              title="Ovonts"
              description="A SaaS platform to discover influencers, manage influencers and their contacts, run campaign's and view campaign progress with beatiful visual, also enable commerce and view your conversion with conversion event intelligence."
              demoLink="https://app.ovonts.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webuy}
              isBlog={false}
              title="Webuy"
              description="A ecommerce platform for engineering students, through which u can view products, add products to your cart, proceed with payment and track your delivery status, also you can ask or take help from bot in platform itself in right bottom."
              ghLink="https://github.com/thetechnerdrohit/webuy"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wazen}
              isBlog={false}
              title="Wazen"
              description="A platform for dubai to purchase, view or renew the vehicle policies for 2 & 4 wheelers. Also, user can cancel or transfer their policies"
              demoLink="https://wplusdev.aspnetdevelopment.in/wazen/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ifeedback}
              isBlog={false}
              title="iFeedback"
              description="A cross platform application, build for resturants to get their customers valuable feedback."
              ghLink="https://github.com/atreyaa/AT_iFeedbackApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
