import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ifeedback from "../../Assets/Projects/ifeedback.gif";
import wazen from "../../Assets/Projects/wazen.gif";
import ovonts from "../../Assets/Projects/ovonts.gif";
import webuy from "../../Assets/Projects/webuy.gif";

function Projects() {
  const [projects] = useState([{
    title: 'Ovonts',
    desc: "A SaaS platform to discover influencers, manage influencers and their contacts, run campaign's and view campaign progress with beatiful visual, also enable commerce and view your conversion with conversion event intelligence.",
    img: ovonts,
    demoLink: 'https://app.ovonts.com/',
    ghLink: "",
    categories: 'influencer-marketing'
  },
  {
    title: 'Webuy',
    desc: "A ecommerce platform for engineering students, through which u can view products, add products to your cart, proceed with payment and track your delivery status, also you can ask or take help from bot in platform itself in right bottom.",
    img: webuy,
    demoLink: 'https://webuy-804c5.web.app/webuy/dashboard',
    ghLink: 'https://github.com/thetechnerdrohit/webuy',
    categories: 'e-commerce,online-store'
  },
  {
    title: 'Wazen',
    desc: "A platform for dubai client to purchase, view or renew the vehicle policies for 2 & 4 wheelers. Also, user can cancel or transfer their policies",
    img: wazen,
    demoLink: 'https://wplusdev.aspnetdevelopment.in/wazen/',
    ghLink: '',
    categories: 'insurance-portal,car-insurance,two-wheeler-insurance'
  },
  {
    title: 'iFeedback',
    desc: "A cross platform application, build for resturants to get their customers valuable feedback.",
    img: ifeedback,
    demoLink: '',
    ghLink: '',
    categories: 'e-feedback,survey'
  },
  {
    title: 'Decra: Debit Credit Analytics',
    desc: `Debit Credit Analytics
    Take a step towards controlling your business finances.
    Preventing leakage due to manual order punching.
    Auto reconciliation of actual sales to payment receipts from aggregators.
    Deep analysis of periodic sales.
    One-stop shop for all restauranter needs.`,
    img: webuy,
    demoLink: '',
    ghLink: '',
    categories: 'finance'
  },
    // {
    //   title: 'TIA',
    //   desc: `TIA `,
    //   img: ifeedback,
    //   demoLink: '',
    //   ghLink: '',
    //   categories: 'Finance'
    // }
  ]);

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
          {
            projects.map(project => (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.img}
                  title={project.title}
                  description={project.desc}
                  demoLink={project.demoLink}
                  ghLink={project.ghLink}
                  categories={project.categories}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
