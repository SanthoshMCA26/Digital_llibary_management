(function () {
  const libraryDataKeys = [
    "books",
    "members",
    "issuedBooks",
    "returnbooks",
    "reports",
    "activities"
  ];

  window.clearLibraryData = function () {
    libraryDataKeys.forEach(function (key) {
      localStorage.removeItem(key);
    });
  };

  if (
    window.location.pathname.endsWith("/") ||
    /(^|\/)(index\.html|login\.html|register\.html)$/i.test(window.location.pathname)
  ) {
    window.clearLibraryData();
  }
})();
