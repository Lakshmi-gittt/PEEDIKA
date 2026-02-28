import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const API = "https://peedika-1.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // LOGIN
        if (!email || !password) {
          alert("Please fill all fields");
          return;
        }

        const res = await fetch(`${API}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message || "Login failed");
          return;
        }

        // Store token
        localStorage.setItem("token", data.token);

        alert("Login successful!");
        navigate("/");
      } else {
        // REGISTER
        if (!name || !email || !password) {
          alert("Please fill required fields");
          return;
        }

        const res = await fetch(`${API}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.message || "Signup failed");
          return;
        }

        alert("Signup successful! Please login.");
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="overlay">
        {/* LEFT BRANDING */}
        <div className="brand-section">
          <h1 className="brand-title">PEEDIKA</h1>
          <p className="brand-subtitle">
            Buy • Sell • Exchange Books
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="glass-card">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <p
            className="switch"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Log In"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;