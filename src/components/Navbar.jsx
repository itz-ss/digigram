// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();


  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          DigiGram
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="nav-menu desktop-menu">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
         
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ================= MOBILE / TABLET DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="nav-backdrop"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="drawer-header">
                <span className="drawer-title">Menu</span>
                <button
                  className="drawer-close"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <ul className="drawer-menu">
                <li>
                  <NavLink
                    to="/"
                    className="drawer-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>

                {/* 🔽 SERVICES ACCORDION (MOBILE) */}
               

              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
