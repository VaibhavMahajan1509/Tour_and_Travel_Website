import React from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Install react-icons if needed: npm install react-icons
import { FaCalendarAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <Container className="search-bar-container p-3">
      <Row className="align-items-center bg-white shadow-sm p-3 rounded">
        {/* Location Field */}
        <Col md={3}>
          <Form.Group>
            <Form.Label><strong>Location</strong></Form.Label>
            <InputGroup>
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Select>
                <option>Location</option>
                <option>New York</option>
                <option>Paris</option>
                <option>Dubai</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>

        {/* Check-in Date */}
        <Col md={3}>
          <Form.Group>
            <Form.Label><strong>Check In</strong></Form.Label>
            <InputGroup>
              <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              <Form.Control type="date" />
            </InputGroup>
          </Form.Group>
        </Col>

        {/* Check-out Date */}
        <Col md={3}>
          <Form.Group>
            <Form.Label><strong>Check Out</strong></Form.Label>
            <InputGroup>
              <InputGroup.Text><FaCalendarAlt /></InputGroup.Text>
              <Form.Control type="date" />
            </InputGroup>
          </Form.Group>
        </Col>

        {/* Guests Dropdown */}
        <Col md={3}>
          <Form.Group>
            <Form.Label><strong>Guest</strong></Form.Label>
            <InputGroup>
              <InputGroup.Text><FaSearch /></InputGroup.Text>
              <Form.Select>
                <option>Guest</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </Form.Select>
            </InputGroup>
          </Form.Group>
        </Col>

        {/* Search Button */}
        <Col md={12} className="text-center mt-3">
          <Button className="search-button">
            <FaSearch /> Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
