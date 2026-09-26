document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (!registerForm) {
    console.error("Error: registerForm not found on this page.");
    return;
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const contact = document.getElementById("mobile").value.trim();

   

    // ✅ Required fields
    if (email === "" || password === "" || contact === "") {
      alert("Please fill in all required fields!");
      return;
    }

    // ✅ Validate contact number (exactly 10 digits)
    if (!/^\d{10}$/.test(contact)) {
      alert("Enter exactly 10 digits for contact number.");
      return;
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Validate password strength
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passRegex.test(password)) {
      alert("Password must be 8+ chars, include uppercase, number, and special character.");
      return;
    }

    
    // ✅ Member registration
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Account created successfully!");
    window.location.href = "../login/login.html";
  });
});
