import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [initialized, setInitialized] = useState(false); // <- prevents immediate redirect

  // Load from localStorage when app starts
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
        console.log("[Auth] restored user from localStorage:", JSON.parse(storedUser));
      }
    } catch (err) {
      console.error("[Auth] error restoring user:", err);
    } finally {
      setInitialized(true);
    }
  }, []);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken || null);
    try {
      localStorage.setItem("user", JSON.stringify(userData));
      if (jwtToken) localStorage.setItem("token", jwtToken);
    } catch (err) {
      console.warn("[Auth] could not persist to localStorage", err);
    }
    console.log("[Auth] login ->", userData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("[Auth] logout");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, initialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
