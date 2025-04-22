import { Container, Row, Col, Card } from 'react-bootstrap';
import image1 from "../assets/Feature1.png";
import image2 from "../assets/Feature2.png";
import image3 from "../assets/Feature3.png";
import image4 from "../assets/Feature4.png";
import styles from "./Feature.module.css";

function Feature() {
  // Array of objects with unique data for each card
  const features = [
    { image: image1, title: "Discover the possibilities", text: "With nearly half a million attractions, hotels & more, you're sure to find joy." },
    { image: image2, title: "Enjoy deals & delights", text: "Quality activities. Great prices. Plus, earn credits to save more." },
    { image: image3, title: "Exploring made easy", text: "Book last minute, skip lines &amp; get free cancellation for easier exploring." },
    { image: image4, title: "Travel you can trust", text: "Read reviews &amp; get reliable customer support. We're with you at every step." }
  ];

  return (
    <Container className={`mt-5 ${styles["Featuresection"]}`}>
      <Row className="g-4 justify-content-center">
        {features.map((feature, index) => (
          <Col md={3} sm={6} key={index}>
            <Card className=" border-0">
              <Card.Img variant="top" src={feature.image} style={{ width: "100px", height: "100px", objectFit: "cover", margin: "10px auto" }} />
              <Card.Body>
                <Card.Title className={styles.Featuretitle}>{feature.title}</Card.Title> {/* Unique Title */}
                <Card.Text>{feature.text}</Card.Text> {/* Unique Text */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Feature;

