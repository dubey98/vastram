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
    console.log(result, "result");
    if (result && result.data && !result.data.success) {
      return { success: false, error: result.data.error };
    } else if (result && result.data && result.data.success) {
      const token = result.data.token;
      localStorage.setItem("token", token);
      setUser({
        email: result.data.email,
        id: jwt.decode(result.data.token.replace("Bearer ", "")).sub.id || "",
      });
      console.log(user);
      return { success: true };
    } else {
      console.log(result, "result2");
      return { success: false, error: "something went wrong" };
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
        id: jwt.decode(result.data.token.replace("Bearer ", "")).sub.id || "",
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
    const token = localStorage.getItem("token") || "";
    const data = jwt.decode(token.replace("Bearer ", ""));
    if (data) {
      setUser({ id: data.sub.id });
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
