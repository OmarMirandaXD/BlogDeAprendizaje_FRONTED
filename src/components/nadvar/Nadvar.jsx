import * as React from "react";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import PublicacionesFiltro from "../publicaciones/PublicacionesFiltro";

export default function SearchAppBar({ filtro, setFiltro }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <div className="navbar-left">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src="./public/logo.svg" alt="Logo" className="navbar-logo" />
          </div>

          <Typography variant="h6" noWrap component="div" className="navbar-title">
            Blog de Aprendizaje
          </Typography>

          {/* Filtro conectado correctamente */}
          <PublicacionesFiltro filtro={filtro} setFiltro={setFiltro} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}