
import { useState } from "react";

import {
  Users,
  Presentation,
  BookOpen,
  Eye,
  EyeOff,
  LogOut
} from "lucide-react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Portal website links
  const portals = [
    {
      name: "Student Portal",
      description: "Access assignments, attendance and results",
      icon: BookOpen,
      link: "https://student-portal-anuchaaya.vercel.app/"
    },
    {
      name: "Parent Portal",
      description: "Track your child's academic performance",
      icon: Users,
      link: "https://parent-portal-dusky.vercel.app/"
    },
    {
      name: "Teacher Portal",
      description: "Manage students, classes and attendance",
      icon: Presentation,
      link: "https://teacher-portal-tech.vercel.app/"
    }
  ];

  // Login function
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password");
      return;
    }

    setLoggedIn(true);
  };

  // Logout function
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setShowPassword(false);
  };

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="brand">
          <h1>PATHSHALA</h1>
        </div>

        {loggedIn && (
          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </button>
        )}

      </nav>

      {!loggedIn ? (

        /* Login Page */

        <div className="login-container">

          <div className="login-card">

            <div className="login-header">
              <h2>Welcome to PATHSHALA</h2>
              <p>Your Gateway to Smarter Education</p>
            </div>

            <form onSubmit={handleLogin}>

              {/* Email */}
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password */}
              <label>Password</label>

              <div className="password-field">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="login-btn"
              >
                Login
              </button>

            </form>

            <p className="footer-text">
              © 2026 PATHSHALA. All Rights Reserved.
            </p>

          </div>

        </div>

      ) : (

        /* Dashboard */

        <div className="dashboard">

          <div className="dashboard-heading">
            <h2>Welcome to PATHSHALA!</h2>
            <p>Select your portal to continue</p>
          </div>

          {/* Portal Cards */}

          <div className="portal-container">

            {portals.map((portal) => {

              const Icon = portal.icon;

              return (

                <div className="portal-card" key={portal.name}>

                  <div className="portal-icon">
                    <Icon size={40} />
                  </div>

                  <h3>{portal.name}</h3>

                  <p>{portal.description}</p>

                  <a
                    href={portal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portal-btn"
                  >
                    Enter Portal
                  </a>

                </div>

              );

            })}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
