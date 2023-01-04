import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {
          props.categories && props.categories.split(",").map(category => (
            <Badge pill bg="light" text="dark" className="me-2 my-2">
              #{category}
            </Badge>
          ))
        }
      </Card.Body>
      <Card.Footer className="text-muted">
        {
          props.ghLink &&
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        }
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
