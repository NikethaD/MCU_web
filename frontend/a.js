
// Flip
function flip() {
  document.getElementById("card").classList.toggle("flip");
}

// Firebase config (PUT YOURS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// SIGNUP
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.sendEmailVerification()
        .then(() => {
          alert("Verification email sent!");
        });
    })
    .catch(err => alert(err.message));
}

// LOGIN
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      if (userCredential.user.emailVerified) {
        window.location.href = "profile.html";
      } else {
        alert("Please verify your email first!");
      }

    })
    .catch(err => alert(err.message));
}