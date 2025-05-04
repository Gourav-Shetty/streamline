import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import background from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/"); // Only navigate here!
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <Container>
      <BackgroundImage />
      <button className="signup-btn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  .signup-btn {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
    z-index: 20;
    background: #e50914;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem 1.5rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
      background: #b0060f;
    }
    @media (max-width: 600px) {
      top: 1rem;
      right: 1rem;
      padding: 0.4rem 1rem;
      font-size: 0.95rem;
    }
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(120deg, rgba(0,0,0,0.7) 60%, rgba(229,9,20,0.7));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      width: 100vw;
      .form {
        background: rgba(20, 20, 20, 0.85);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(8px);
        border-radius: 1.2rem;
        padding: 2.5rem 2rem 2rem 2rem;
        width: 350px;
        max-width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        .title {
          h3 {
            color: #fff;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
          }
        }
        .container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          width: 100%;
          input {
            padding: 0.8rem 1rem;
            border-radius: 0.4rem;
            border: none;
            outline: none;
            font-size: 1rem;
            background: #222;
            color: #fff;
            transition: border 0.2s;
            border: 1.5px solid transparent;
            &:focus {
              border: 1.5px solid #e50914;
              background: #181818;
            }
          }
          button {
            padding: 0.8rem 1rem;
            background: linear-gradient(90deg, #e50914 60%, #b0060f 100%);
            border: none;
            border-radius: 0.4rem;
            color: #fff;
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            margin-top: 0.5rem;
            transition: background 0.2s, transform 0.2s;
            box-shadow: 0 2px 8px rgba(229,9,20,0.15);
            &:hover {
              background: #b0060f;
              transform: translateY(-2px) scale(1.03);
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .content {
      .form-container {
        .form {
          width: 95vw;
          padding: 1.5rem 0.5rem;
        }
      }
    }
  }
`;

export default Login;