document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    
    // Redirect to dashboard after successful login
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Login failed:", error.message);
    // Handle login error here, e.g., display error message to user
  }
});

document.getElementById('login-google').addEventListener('click', async () => {
  try {
    const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = result.user;
    console.log("User logged in with Google:", user);
    
    // Redirect to dashboard after successful login with Google
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Google login failed:", error.message);
    // Handle login error here, e.g., display error message to user
  }
});
