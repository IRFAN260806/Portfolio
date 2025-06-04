import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 35,
  backgroundColor: "rgba(15, 23, 42, 0.9)",
  padding: "15px 0",
  position: "sticky",
  top: 0,
  zIndex: 10,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  boxShadow: "0 0 15px #4f46e5",
};

const activeStyle = {
  color: "#818cf8",
  fontWeight: "700",
  borderBottom: "2px solid #6366f1",
  paddingBottom: 5,
};

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
        end
      >
        Welcome
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        Projects
      </NavLink>
      <NavLink
        to="/skills"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        Skills
      </NavLink>
      <NavLink
        to="/experience"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        Experience
      </NavLink>
      <NavLink
        to="/certificates"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        Certificates
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : { color: "white" })}
      >
        Contact
      </NavLink>
    </nav>
  );
}
