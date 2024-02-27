import { createContext, useEffect, useState, useContext  } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
// import { BASE_URL } from "../config";
// import { register } from "../api/userData";

const TOKEN_KEY = "MY-JWT";
export const API_URL = "https://dummyjson.com/auth";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stored: ", token);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer  + ${token}`;

        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };

    loadToken();
  }, []);

  const register = async (username, password) => {
    try {
      return await axios.post(`${API_URL}/login`, {
        username,
        password,
        // expiresInMins: 60, // optional
      });
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  };

  const login = async (username, password) => {
    try {
      const result = await axios.get(`${API_URL}/me`);
      console.log("My result", result);

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer  + ${result.data.token}`;

      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

      return result;
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  };

  const logout = async () => {
    // Delete token from storage
    await SecureStore.deleteItemAsync(TOKEN_KEY);

    // Update HTTP Headers
    axios.defaults.headers.common["Authorization"] = "";

    // Reset auth state
    setAuthState({
      token: null,
      authenticated: false,
    });
   
  };

  const value = {
    register,
    login,
    logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};
