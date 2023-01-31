import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Mycard.css"

function BasicCard({item}) {
  return (
    <>
      <Card
      style={{
        width: 300,
        height: 300,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title> {item.event_name}</Card.Title>
        {/* <p>{item.EDate}</p> */}
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the...
        </Card.Text> */}
        <Button variant="primary">Register</Button>
      </Card.Body>
    </Card>


     
     </>
  );
}

export default BasicCard;
