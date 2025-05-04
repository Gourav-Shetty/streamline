import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" className="logo" />
      {/* <button className="signup-btn" onClick={() => navigate("/signup")}>
        Sign Up
      </button> */}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  padding: 0 4rem;
  .logo {
    height: 5rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;