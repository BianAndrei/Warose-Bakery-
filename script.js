document.addEventListener("click", (event) => {
  const link = event.target.closest(".mn a");
  if (link) {
    const mobileMenu = link.closest(".mn");
    if (mobileMenu) mobileMenu.open = false;
  }
});
