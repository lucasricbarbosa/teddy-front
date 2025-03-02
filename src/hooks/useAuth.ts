import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface User {
  name: string;
}

export function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser({
        name: storedUser,
      });
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("user", userData.name);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const isAuthenticated = !!user;

  return { user, login, logout, isAuthenticated, loading };
}
