(function () {
  const loginUrl = new URL("Login/login.html", document.currentScript.src).href;

  function redirectIfLoggedOut() {
    if (!localStorage.getItem("userRole")) {
      document.documentElement.style.visibility = "hidden";
      window.location.replace(loginUrl);
      return;
    }

    document.documentElement.style.visibility = "";
  }

  redirectIfLoggedOut();
  window.addEventListener("pagehide", function () {
    document.documentElement.style.visibility = "hidden";
  });
  window.addEventListener("pageshow", redirectIfLoggedOut);

  document.addEventListener("click", function (event) {
    const target = event.target;
    const logoutLink = target instanceof Element ? target.closest("#logoutBtn") : null;

    if (!logoutLink) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    document.documentElement.style.visibility = "hidden";
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userRole");
    window.location.replace(loginUrl);
  }, true);
})();
