import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
  LogoutBtn,
  ModalOverlay,
  ModalContent,
  ModalButtons,
} from "./styledComponents";

function NavBar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const confirmLogout = () => {
    console.log("User logged out");
    setShowModal(false);
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/map"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Map
            </StyledNavLink>
          </NavItem>
        </NavList>
        <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      </Nav>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>Are you sure you want to log out?</p>
            <ModalButtons>
              <button onClick={confirmLogout}>Yes</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}

export default NavBar;
