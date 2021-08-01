import service from "./axios.interceptor";

async function signUp(postData) {
  return await service.post("/auth/signup", postData);
}

async function signIn(postData) {
  return await service.post("/auth/login", postData);
}

async function signOut() {
  console.log("signout called");
}

async function sendPasswordResetEmail(email) {
  console.log("sendPasswordResetEmail called");
}

async function confirmPasswordReset(code, password) {
  console.log("confirmPasswordReset called");
}

const authService = {
  signIn,
  signUp,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
};

export default authService;
