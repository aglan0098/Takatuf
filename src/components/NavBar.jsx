import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import brand from "../assets/images/brand.svg";

export default function DefaultNavbar() {
  return (
    <>
      <Navbar className="py-4" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="bg-primary">
            <img
              src={brand}
              className="position-absolute"
              style={{ top: `-30px`, right: `0` }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto bg-priamry align-items-center fw-bold">
              <NavLink to="/login" className="nav_item my-1 mx-3">
                تبحث عن تدريب؟
              </NavLink>
              <NavLink to="/login" className="nav_item my-1 mx-3">
                للشركات
              </NavLink>
              <NavLink to="" className="nav_item my-1 mx-3">
                المدونه
              </NavLink>
              <NavLink to="/trainer-register" className="nav_item my-1 mx-3">
                <button className="default-button">تسجيل المتدربين</button>
              </NavLink>
              <NavLink to="/company-register" className="nav_item my-1 mx-3">
                <button className="primary-button">تسجيل الشركات</button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
