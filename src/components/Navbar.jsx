import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { firebaseAuth } from "../utils/firebase-config";

export default function Navbar({ isScrolled, onSearch }) {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleLogout = async () => {
    await firebaseAuth.signOut();
    navigate("/login");
  };

  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search-container ${showSearch ? "active" : ""}`}>
            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={handleChange}
              style={{ display: showSearch ? "block" : "none" }}
              autoFocus={showSearch}
              onBlur={() => setShowSearch(false)}
            />
          </div>
          <button onClick={() => setShowLogout(true)}>
            <FaPowerOff />
          </button>
        </div>
        {showLogout && (
          <div className="logout-popup">
            <div className="popup-content">
              <p>Are you sure you want to logout?</p>
              <div className="popup-buttons">
                <button onClick={handleLogout}>Yes</button>
                <button onClick={() => setShowLogout(false)}>No</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search-container {
        position: relative;
        display: flex;
        align-items: center;
        .search-icon {
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.2s;
          &:hover {
            color: #e50914;
          }
        }
        input {
          display: none;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0,0,0,0.8);
          border: 1px solid #fff;
          color: #fff;
          padding: 0.3rem 1rem;
          border-radius: 2rem;
          min-width: 180px;
          font-size: 1rem;
          transition: all 0.3s;
          z-index: 10;
        }
        &.active input {
          display: block;
          animation: fadeIn 0.3s;
        }
      }
    }
    .logout-popup {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      .popup-content {
        background: #222;
        padding: 2rem 2.5rem;
        border-radius: 1rem;
        text-align: center;
        color: #fff;
        p {
          margin-bottom: 1.5rem;
        }
        .popup-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            background: #e50914;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            &:last-child {
              background: #444;
            }
          }
        }
      }
    }
  }
  @keyframes fadeIn {
    from { opacity: 0; width: 0; }
    to { opacity: 1; width: 180px; }
  }
`;