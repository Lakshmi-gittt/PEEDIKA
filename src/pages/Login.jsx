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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      if (password !== "1234") {
        alert("Invalid password. Use 1234");
        return;
      }

      navigate("/");
    } else {
      // SIGN UP
      if (!name || !place || !phone || !email || !password) {
        alert("Please fill all fields");
        return;
      }

      console.log("Signup Data:", {
        name,
        place,
        phone,
        email,
        password,
      });

      alert("Signup successful (temporary)");

      setIsLogin(true);
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