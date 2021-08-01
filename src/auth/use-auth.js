import React, { createContext, useState, useContext } from "react";
import authService from "./../services/auth.service";
import jwt from "jsonwebtoken";
import { useEffect } from "react";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (data) => {
    const result = await authService.signIn(data);
    if (!result.data.success) {
      return { success: false, error: result.data.error };
    } else {
      const token = result.data.token;
      localStorage.setItem("token", token);
      setUser({
        email: result.data.email,
        id: jwt.decode(result.data.token.replace("Bearer ", "")).sub || "",
      });
      console.log(user);
      return { success: true };
    }
  };

  const signOut = () => {
    localStorage.setItem("token", false);
    setUser(null);
    return true;
  };

  const signUp = async (data) => {
    const result = await authService.signUp(data);

    if (!result.data.success) {
      return { success: false, error: result.data.error };
    } else {
      const token = result.data.token;
      localStorage.setItem("token", token);
      setUser({
        email: result.data.email,
        id: jwt.decode(result.data.token.replace("Bearer ", "")).sub || "",
      });
      console.log(user);
      return { success: true };
    }
  };

  const sendPasswordResetEmail = (email) => {
    console.log("sendPasswordResetEmail called");
  };

  const confirmPasswordReset = (code, password) => {
    console.log("confirmPasswordReset called");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = jwt.decode(token.replace("Bearer ", ""));
    if (id) {
      setUser({ id: id });
    }
  }, []);

  return {
    user,
    signIn,
    signOut,
    signUp,
    confirmPasswordReset,
    sendPasswordResetEmail,
  };
}
