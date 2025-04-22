import React from "react";
import { Navbar, Nav, Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css"; // ✅ Correct Import

// Import images
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.avif";

function Home() {
  return (
    <div className={styles.carouselContainer}>
      {/* Transparent Navbar Inside Carousel */}
      <Navbar expand="lg" className={styles.navbarTransparent}>
        <Container>
          <Navbar.Brand className={styles.navbrand} href="#">My Tour & Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={styles.navLinks} href="#">HOME</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#">ABOUT</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#">DESTINATION</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#">GALLERY</Nav.Link>
              <Nav.Link className={styles.navLinks} href="#">CONTACT</Nav.Link>
              <button className={styles.bookNowButton}>Book Now</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Full-Screen Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className={`d-block w-100 ${styles.carouselImage}`} src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>JOURNEY TO EXPLORE WORLD</h3>
            <p>Find your dream destinations with us.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={`d-block w-100 ${styles.carouselImage}`} src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>BEAUTIFUL PLACE TO VISIT</h3>
            <p>Experience the thrill of adventure.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className={`d-block w-100 ${styles.carouselImage}`} src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Luxury Travel</h3>
            <p>Relax in premium destinations worldwide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
