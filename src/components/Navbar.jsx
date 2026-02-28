import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      {/* LEFT SECTION */}
      <div style={styles.logoSection}>
        <h2 style={styles.logo}>📚 Peedika</h2>
        <span style={styles.tagline}>Buy • Sell • Share Books</span>
      </div>

      {/* CENTER SEARCH */}
      <input
        type="text"
        placeholder="Search books..."
        style={styles.search}
      />

      {/* RIGHT SECTION */}
      <div style={styles.buttonSection}>
        <Link to="/" style={styles.link}>
          <button style={styles.homeBtn}>Home</button>
        </Link>

        <Link to="/sell" style={styles.link}>
          <button style={styles.sellBtn}>Sell Book</button>
        </Link>

        {/* LOGIN ICON */}
        <FaUserCircle
          size={30}
          style={styles.loginIcon}
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 8%",
    backgroundColor:'black',
    boxShadow: "0 2px 8px rgba(133, 87, 87, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logoSection: {
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    margin: 0,
    color: "#8B4513",
    fontSize: "24px",
  },

  tagline: {
    fontSize: "12px",
    color: "#777",
  },

  search: {
    padding: "10px 15px",
    width: "320px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
  },

  buttonSection: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  homeBtn: {
    padding: "10px 18px",
    backgroundColor: "#f3f3f3",
    color: "#333",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  sellBtn: {
    padding: "10px 20px",
    backgroundColor: "#8B4513",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },

  loginIcon: {
    cursor: "pointer",
    color: "#e6d406",
    transition: "0.3s",
  },

  link: {
    textDecoration: "none",
  },
};

export default Navbar;