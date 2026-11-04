document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) {
    console.error("Error: loginForm not found on this page.");
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");

    // ✅ Admin constants
    const adminEmail = "santhoshrvs26@gmail.com";
    const adminPassword = "Santhosh@8380";

    // ✅ Member credentials
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // ✅ Validation
    if (email === "" || password === "" || role === "") {
      alert("Please enter email, password, and select a role.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Admin login
    if (role === "admin") {
      if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("userRole", "Admin");
        message.style.color = "green";
        message.textContent = "Admin login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "../admin-login/DashBoard page/DashBoard.html";
        }, 1500);
      } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password for Admin account.";
      }
      return;
    }

    // ✅ Member login
    if (role === "member") {
      if (!storedEmail || !storedPassword) {
        message.style.color = "red";
        message.textContent = "No member account found. Please sign up first.";
        return;
      }

      if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("userRole", "Member");
        message.style.color = "green";
        message.textContent = "Member login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "../member-login/DashBoard page/Member-DashBoard.html";
        }, 1500);
      } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password!";
      }
      return;
    }
  });
});
