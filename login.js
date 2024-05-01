document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Pengguna berhasil login, arahkan ke halaman dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
    });
});

document.getElementById('login-google').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      // Pengguna berhasil login dengan Google, arahkan ke halaman dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
    });
});
