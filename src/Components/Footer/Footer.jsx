import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TbAlarmAverage } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5" id="contact">
            <Container>
                <Row className="text-center">
                    <Col className="d-flex flex-column align-items-center" style={{ display: "flex" }}>
                        <div className="d-flex align-items-center">
                            <TbAlarmAverage size={40} className="me-2" />
                            <h3 className="mb-0">Time-Scheduler</h3>
                        </div>
                    </Col>
                    <Col>
                        <p className="mt-2" style={{ maxWidth: "500px" }}>
                            Plan, organize, and manage your time effectively. Stay productive and never miss an important event with our intelligent scheduler.
                        </p>
                    </Col>
                </Row>

                <Row className="text-center" style={{ margin: "30px 0" }}>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>Time-Table Scheduler helps you manage tasks efficiently with smart scheduling and AI-powered suggestions.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Our Services</h5>
                        <ul className="list-unstyled">
                            <li><FaRegCalendarCheck/> Smart Timetable Planning</li>
                            <li><AiOutlineThunderbolt/> Task Scheduling</li>
                            <li><GiProgression/> Productivity Tracking</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>Email: support@timetablescheduler.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>
                </Row>

                <Row className="text-center mt-3">
                    <Col>
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="text-light me-3"><FaFacebook size={25} /></a>
                            <a href="#" className="text-light me-3"><FaTwitter size={25} /></a>
                            <a href="#" className="text-light me-3"><FaInstagram size={25} /></a>
                            <a href="#" className="text-light"><FaLinkedin size={25} /></a>
                        </div>
                    </Col>
                </Row>

                <Row className="text-center mt-4">
                    <Col>
                        <h4 className="mb-0">&copy; 2025 Time-Table Scheduler. All Rights Reserved.</h4>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
