import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: #f8f9fa;
  padding: 1rem 2rem;
  border-bottom: 1px solid #dee2e6;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
`;

export const StyledNavLink = styled(NavLink)`
  color: #212529; /* Dark Grayish Black */
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;

  &.active {
    color: #0d6efd;
    font-weight: bold;
  }

  &:hover {
    background: #e9ecef;
    color: #0b5ed7;
  }
`;

export const LogoutBtn = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;

    &:hover {
      background: #0056b3;
    }
  }

  button:last-child {
    background: #ff4d4d;

    &:hover {
      background: #cc0000;
    }
  }
`;
