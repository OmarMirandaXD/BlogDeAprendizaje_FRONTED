import * as React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          
          <Link to="/" className="navbar-logo-link">
            <img src="/logo.svg" alt="Logo" className="navbar-logo animated-logo" />
          </Link>

          <Typography variant="h6" noWrap component="div" className="navbar-title wave-text">
            {"Blog de Aprendizaje".split("").map((char, i) => (
              <span key={i}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="contained"
            color="secondary"
            className="inicio-button"
          >
            Inicio
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
