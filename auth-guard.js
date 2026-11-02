(function () {
  const loginUrl = new URL("Login/login.html", document.currentScript.src);

  function redirectIfLoggedOut() {
    if (!localStorage.getItem("userRole")) {
      window.location.replace(loginUrl.href);
    }
  }

  redirectIfLoggedOut();
  window.addEventListener("pageshow", redirectIfLoggedOut);

  document.addEventListener("click", function (event) {
    const target = event.target;
    const logoutLink = target instanceof Element ? target.closest("#logoutBtn") : null;

    if (!logoutLink) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userRole");
    window.location.replace(loginUrl.href);
  }, true);
})();
