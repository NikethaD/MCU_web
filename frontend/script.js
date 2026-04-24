// ======================
// FLIP CONTROL
// ======================
function flipToSignup() {
  const card = document.getElementById("card");
  card.classList.add("flip");
}

function flipToLogin() {
  const card = document.getElementById("card");
  card.classList.remove("flip");
}


// ======================
// PASSWORD TOGGLE
// ======================
function togglePassword(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}


// ======================
// LOGIN API
// ======================
async function login() {
  const uucms = document.getElementById("loginId").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!uucms || !password) {
    alert("Please enter all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/student/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uucms: uucms,
        password: password
      })
    });

    const data = await res.json();

    if (res.ok) {
      // success
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed");
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
}


// ======================
// SIGNUP API
// ======================
async function signup() {
  const uucms = document.getElementById("signupId").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!uucms || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/student/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uucms: uucms,
        email: email,
        password: password
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Verification email sent!");

      // OPTIONAL: flip back to login after signup
      flipToLogin();

    } else {
      alert(data.message || "Signup failed");
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
}

// SAVE PROFILE
async function saveProfile() {
  const data = {
    first_name: document.getElementById("firstName").value,
    last_name: document.getElementById("lastName").value,
    dob: document.getElementById("dob").value,
    course: document.getElementById("course").value,
    year: document.getElementById("year").value,
    phone: document.getElementById("phone").value
  };

  try {
    const res = await fetch("http://localhost:5000/api/student/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      alert("Profile saved!");
      window.location.href = "dashboard.html";
    } else {
      alert(result.message || "Error saving profile");
    }

  } catch (err) {
    console.error(err);
    alert("Server error");
  }
}

function goAdmin() {
  window.location.href = "admin.html";
}
function goStudent() {
  window.location.href = "student.html";
}









